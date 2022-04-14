const {expect } = require('chai');
const { ethers } = require('hardhat');

describe('Whitelist', function () {
  before(async function () {
    this.Whitelist = await ethers.getContractFactory('Whitelist');
  });

  beforeEach(async function () {
    this.whitelist = await this.Whitelist.deploy();
    await this.whitelist.deployed();
  });

  it('should be able to add multiple accounts to whitelist without throwing an error.', async function () {
    let isErr = false;
    try {
      await this.whitelist.addWhitelistUser("0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc");
      await this.whitelist.addWhitelistUser("0x90f79bf6eb2c4f870365e785982e1f101e93b906");  
    } catch (err){
      isErr = true;
    }
    expect(isErr).to.equal(false);
  });
});

//addWhitelistUser

//0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc

//0x90f79bf6eb2c4f870365e785982e1f101e93b906