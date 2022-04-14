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
    expect((await this.tool.getNumMintedTokens()).toString()).to.equal('0');
  });

  it('returns two total tokens after two are minted.', async function () {
    await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");

    await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");

    expect((await this.tool.getNumMintedTokens()).toString()).to.equal('2');
  });


 it('should not mint more than maximum allowable tokens', async function () {
   let isErr = false;
    const token0 = await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");  
    const token1 = await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    const token2 = await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    const token3 = await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    const token4 = await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
   
    try {
      await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    } catch (err) {
      isErr = true;
    }

    expect(isErr).to.equal(true);
  });

  it('should mint a new token and append tokenID to the base URI value.', async function () {
    const token0 = await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");

    const token0URI = await this.tool.tokenURI(0); 

    expect(token0URI).to.equal("https://base.uri/0");
  });

  it('should not mint a new token after contract has been paused.', async function () {
    let isErr = false;
    await this.tool.pause();
    try { 
        await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    } catch (err) {
      isErr = true;
    } 

    expect(isErr).to.equal(true);
  });

  it('should mint a new token after contract has been unpaused.', async function () {
    await this.tool.pause();
    await this.tool.unpause();

    const createToken = async () => {
      await this.tool.safeMint("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
    }
    expect(createToken).not.to.throw();
  });
});