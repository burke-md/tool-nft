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

  xit('testcasehere', async function () {
    //await this.whitelist.functionHere();

    expect(true).to.equal(true);
  });
});