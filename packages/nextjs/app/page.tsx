"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MintButton from "~~/components/MintButton";
import ProposeTask from "~~/components/ProposeTask";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <ProposeTask />
        {/* <MintButton /> */}
      </div>
    </>
  );
};

export default Home;
