// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./Whitelist.sol";

contract Tool is ERC721, ERC721URIStorage, Pausable, Ownable, ERC721Burnable, Whitelist {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdCounter;

  constructor() ERC721("Tool", "TOOL") {}

  function _baseURI() internal pure override returns (string memory) {
    return "ipfs://CID";
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function safeMint(address to) public onlyOwner {
    require(_tokenIdCounter.current() < 5, 'tokenIdCounter has incremented beyond maximum number of tokens');

    _tokenIdCounter.increment();
    uint256 tokenId = _tokenIdCounter.current();
    _safeMint(to, tokenId);
  }

  function safeWhitelistMint(address to) public onlyOwner isWhitelisted(to) {
    require(_tokenIdCounter.current() < 5, 'tokenIdCounter has incremented beyond maximum number of tokens');
    
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

  function getNumMintedTokens() public view returns(uint256) {
    return _tokenIdCounter.current();
  }

  /*@dev The following functions (_burn, tokenURI) need
  to be overridden as there are multiple
  definitions.
  */
  function _burn(uint256 tokenId) internal override(ERC721,
  ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }
}
