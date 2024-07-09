// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// contract Task is ERC721, Ownable, ERC721Enumerable {
contract Task is ERC721, Ownable {
	using Counters for Counters.Counter;

	Counters.Counter public tokenIdCounter;

	mapping(uint256 => string) private _tokenURIs;

	constructor() ERC721("Task", "TSK") {}

	function mint(
		address to,
		uint256 tokenId,
		string memory tokenURI
	) external onlyOwner {
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, tokenURI);
	}

	function _setTokenURI(uint256 tokenId, string memory tokenURI) internal {
		require(
			_exists(tokenId),
			"ERC721Metadata: URI set of nonexistent token"
		);
		_tokenURIs[tokenId] = tokenURI;
	}

	function tokenURI(
		uint256 tokenId
	) public view virtual override returns (string memory) {
		require(
			_exists(tokenId),
			"ERC721Metadata: URI query for nonexistent token"
		);
		return _tokenURIs[tokenId];
	}
}
