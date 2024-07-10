//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

contract YourContract {
	struct Member {
		string name;
		address memberAddress;
		address memberOf;
		uint256 reputation;
	}

	struct DAO {
		address daoHash;
		address[] members;
		uint256 numOfMembers;
	}

	mapping(address => DAO) public daosMap;
	mapping(address => Member) public people;

	address public currentDao;

	function createDao() public {
		bytes32 prevHash = blockhash(block.number - 1);
		address daoHash = address(
			bytes20(keccak256(abi.encode(msg.sender, prevHash)))
		);
		DAO memory newDAO;
		newDAO.daoHash = daoHash;
		daosMap[daoHash] = newDAO;
		currentDao = daoHash;
	}

	function joinDao(address daoHash) public {
		Member memory newMember;
		newMember.name = "new guy";
		newMember.memberAddress = msg.sender;
		newMember.memberOf = daoHash;
		newMember.reputation = 5;
		daosMap[daoHash].numOfMembers++;
		daosMap[daoHash].members.push(newMember.memberAddress);
		people[msg.sender] = newMember;
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
