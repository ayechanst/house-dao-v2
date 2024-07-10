"use client";

import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/scaffold-eth/task/ipfs-fetch";
import nftsMetadata from "~~/utils/scaffold-eth/task/nftsMetadata";

// import nftsMetadata from "~~/utils/simpleNFT/nftsMetadata";

const MintButton = () => {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount();

  const { writeContractAsync } = useScaffoldWriteContract("Task");

  const { data: tokenIdCounter } = useScaffoldReadContract({
    contractName: "Task",
    functionName: "tokenIdCounter",
    watch: true,
  });
  const handleMintItem = async () => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return;

    const tokenIdCounterNumber = Number(tokenIdCounter);
    const currentTokenMetaData = nftsMetadata[tokenIdCounterNumber % nftsMetadata.length]; // this reads from the non-existent meta data file
    const notificationId = notification.loading("Uploading to IPFS");
    try {
      const uploadedItem = await addToIPFS(currentTokenMetaData);

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId);
      notification.success("Metadata uploaded to IPFS");

      await writeContractAsync({
        functionName: "mint",
        // args: [connectedAddress, uploadedItem.path], OG
        args: [connectedAddress, tokenIdCounter], // where token URI
      });
    } catch (error) {
      notification.remove(notificationId);
      console.error(error);
    }
  };
  return (
    <>
      <button className="btn" onClick={handleMintItem}>
        Mint!!
      </button>
    </>
  );
};

export default MintButton;
