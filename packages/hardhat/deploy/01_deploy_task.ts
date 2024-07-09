import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat/";
import { Task, YourContract } from "../typechain-types";

const deployTask: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const yourContract: YourContract = await ethers.getContract("YourContract");
  const diceGameAddress = await yourContract.getAddress();

  await deploy("Task", {
    from: deployer,
    log: true,
    args: [],
    autoMine: true,
  });

  const task: Task = await ethers.getContract("Task", deployer);

  // Please replace the text "Your Address" with your own address.
  // try {
  //   await riggedRoll.transferOwnership("Your Address");
  // } catch (err) {
  //   console.log(err);
  // }
};

export default deployTask;

deployTask.tags = ["Task"];