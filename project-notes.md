# Steps to Mint an NFT with IPFS Metadata

Create Metadata JSON File:

First, create the metadata for your NFT. This is a JSON file containing information such as the name, description, image, and attributes of the NFT.
Example metadata JSON file:

```json
{
  "name": "My NFT",
  "description": "This is my NFT description",
  "image": "https://ipfs.io/ipfs/QmExampleImageHash/image.png",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Eyes",
      "value": "Green"
    }
  ]
}
```

Upload Metadata to IPFS:

Upload the metadata JSON file to IPFS using a service like Pinata, Infura, or a local IPFS node. This step gives you a unique IPFS hash for your metadata file.
Example using Pinata CLI:

bash
Copy code
pinata pin file-to-upload.json
After uploading, you receive an IPFS hash, e.g., QmExampleHash.

Form the IPFS URI:

Combine the IPFS base URL with the hash to form the complete URI. For example, https://ipfs.io/ipfs/QmExampleHash.
Use the URI in Your Mint Function:

Pass the formed URI as the tokenURI parameter when calling your mint function.
Detailed Example
Step 1: Create Metadata JSON File
Create a JSON file named metadata.json with the following content:

```json
{
  "name": "My NFT",
  "description": "This is my NFT description",
  "image": "https://ipfs.io/ipfs/QmExampleImageHash/image.png",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Eyes",
      "value": "Green"
    }
  ]
}
```

Step 2: Upload Metadata to IPFS
Use Pinata, Infura, or another IPFS service to upload the metadata.json file. After uploading, you will get an IPFS hash, e.g., QmExampleHash.

Step 3: Form the IPFS URI
Combine the IPFS base URL with the hash:

plaintext
Copy code
https://ipfs.io/ipfs/QmExampleHash
Step 4: Mint the NFT Using the URI
Now that you have the IPFS URI, you can call the mint function in your smart contract.

Summary
Create and upload the metadata to IPFS before calling the mint function.
Retrieve the IPFS hash after uploading and form the IPFS URI.
Use the IPFS URI as the tokenURI parameter in the mint function.
By following these steps, you ensure that the metadata is available on IPFS before minting the NFT, and the tokenURI parameter correctly points to the metadata. This separation of steps avoids any chicken-and-egg problem.
