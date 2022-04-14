// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Whitelist is Ownable {
  constructor() {}

  modifier isWhitelisted(address _address) {
    require(whiteListedsAddresses[_address], "Function caller must be whitelisted");
    _;
  }

  mapping(address => bool) whiteListedsAddresses;

  function addWhitelistUser(address _addresToWhitelist) public onlyOwner {
    whiteListedsAddresses[_addresToWhitelist] = true;
  }

  function verifyWhitelistUser(address _whitelistedAddress) public view returns(bool) {
    bool userIsWhitelisted = whiteListedsAddresses[_whitelistedAddress];
    return userIsWhitelisted;
  }
}