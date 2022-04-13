// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Tool is ERC721, ERC721URIStorage, Pausable, Ownable, ERC721Burnable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdCounter;

  constructor() ERC721("Tool", "TOOL") {}

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }
//@dev handle minting cap
  function safeMint(address to) public onlyOwner {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _safeMint(to, tokenId);
  }

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    whenNotPaused
    override
    {
      super._beforeTokenTransfer(from, to, tokenId);
    }

//@dev The following functions (_burn, tokenURI) need
//to be overridden as there are multiple conflicting 
//definitions.
    function _burn(uint256 tokenId) internal override(ERC721,
    ERC721URIStorage) {

    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
      return super.tokenURI(tokenId);
    }
}
