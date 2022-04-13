// Note: we must use strings to compare the 256 bit integers

const {expect } = require('chai');

describe('Tool', function () {
  before(async function () {
    this.Tool= await ethers.getContractFactory('Tool');
  });

  beforeEach(async function () {
    this.tool = await this.Tool.deploy();
    await this.tool.deployed();
  });

  it('returns zero total tokens before any are minted.', async function () {

    expect((await this.tool.getNumTokens()).toString()).to.equal('0');
  });
});