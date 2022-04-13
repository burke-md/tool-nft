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

  it('returns two total tokens after two are minted.', async function () {
    await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");

    await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");

    expect((await this.tool.getNumTokens()).toString()).to.equal('2');
  });
});