// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {

  address owner;

  constructor() {
    //@dev Could be set to specific wallet for managing whitelist
    owner =  msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Function caller must be contract owner.");
    _;
  }

  modifier isWhitelistes(address _address) {
    require(whiteListedsAddresses[_address], "Function caller must be whitelisted.");
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