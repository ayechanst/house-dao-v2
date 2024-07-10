import { ethers } from "hardhat";
import { expect } from "chai";
import { YourContract } from "../typechain-types";

describe("YourContract", function () {
    let hardhatContract: YourContract;

    beforeEach(async function () {
        const [owner] = await ethers.getSigners();
        const YourContractFactory = await ethers.getContractFactory("YourContract");
        hardhatContract = await YourContractFactory.deploy();
        await hardhatContract.deployed();
    });

    it("Allow different members to join the same group", async function () {
        const [owner, member1, member2] = await ethers.getSigners();

        await hardhatContract.createDao();
        const daoHash = await hardhatContract.currentDao();

        await hardhatContract.connect(member1).joinDao(daoHash);
        await hardhatContract.connect(member2).joinDao(daoHash);

        const dao = await hardhatContract.daosMap(daoHash);
        expect(dao.numOfMembers).to.equal(3); // Check if owner and 2 members are in the group
    })

});