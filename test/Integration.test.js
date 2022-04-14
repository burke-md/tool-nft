// Note: we must use strings to compare the 256 bit integers

const {expect } = require('chai');

describe('Integration', function () {
  before(async function () {
    this.Tool= await ethers.getContractFactory('Tool');
  });

  beforeEach(async function () {
    this.tool = await this.Tool.deploy();
    await this.tool.deployed();
  });

  it('Whitelist accounts should not throw error and mint one token when calling whitelist mint function.', async function () {
    let isErr = false;
    await this.tool.addWhitelistUser("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
  
    try {
      await this.tool.safeWhitelistMint("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    } catch (err) {
      isErr = true;
    }
    
    expect(isErr).to.equal(false);
    expect((await this.tool.getNumMintedTokens()).toString()).to.equal('1');
  });

  it('Non whitelist accounts should throw error and prevent mint when calling whitelist mint function.', async function () {
    let isErr = false;
    try {
      await this.tool.safeWhitelistMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    } catch (err) {
      isErr = true;
    }
    
    expect(isErr).to.equal(true);
    expect((await this.tool.getNumMintedTokens()).toString()).to.equal('0');
  });
});