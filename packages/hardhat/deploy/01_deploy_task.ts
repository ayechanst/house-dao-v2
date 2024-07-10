import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat/";
import { Task, YourContract } from "../typechain-types";

const deployTask: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const yourContract: YourContract = await ethers.getContract("YourContract");

  await deploy("Task", {
    from: deployer,
    log: true,
    args: [],
    autoMine: true,
  });

  const task: Task = await ethers.getContract("Task", deployer);
};

export default deployTask;

deployTask.tags = ["Task"];