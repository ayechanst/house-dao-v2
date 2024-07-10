//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

contract YourContract {
	struct Member {
		string name;
		address memberAddress;
		uint256 reputation;
	}

	struct DAO {
		address daoHash;
		Member[] members;
	}

	mapping(address => DAO) public daosMap;

	function createDao() public {
		address daoHash = generateDaoHash();
		DAO memory newDAO;
		newDAO.daoHash = daoHash;
		daosMap[daoHash] = newDAO;
	}

	function joinDao(address daoHash) public {
		Member memory newMember;
		newMember.name = "new guy";
		newMember.memberAddress = msg.sender;
		newMember.reputation = 5;
		DAO storage dao = daosMap[daoHash];
		dao.members.push(newMember);
	}

	function generateDaoHash() private view returns (address) {
		bytes32 prevHash = blockhash(block.number - 1);
		return address(bytes20(keccak256(abi.encode(msg.sender, prevHash))));
	}

	uint256 public yes;
	uint256 public no;

	function ballot(bool vote) public returns (bool) {
		if (vote) {
			yes++;
		} else {
			no++;
		}
		if (((yes + no) == 5) && yes > no) {
			yes = 0;
			no = 0;
			return true;
		} else if (((yes + no) < 5) && yes < no) {
			yes = 0;
			no = 0;
			return false;
		} else {
			return false;
		}
	}
}
