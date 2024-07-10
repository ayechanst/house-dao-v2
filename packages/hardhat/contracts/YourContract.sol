//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

contract YourContract {
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
