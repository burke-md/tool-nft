# Tool

The goal of this project is to create a smart contract. This contract will represent in game tools. For example a black smith's hammar or fire tongues. The contract shall fulfill the below requirments:

- [x] Create an ERC721 NFT
- [x] With a max supply of 5 pieces
- [x] Each token will hold an attribute ex. type of tool.
- [x] Contract must be pausable
- [x] Contract must contain list for 'pre-sale' buyers(whitelist).
- [ ] Contract must independantly 'unpause' for pre-sale approved buyers.
- [x] Tokens must be burnable
- [x] Use a URI to point to external data
  - [x] Must use IPFS
- [x] Implement unit tests
  - [ ] See below for comprhensive list of tests to complete
- [x] Deploy to testnet
- [x] Build simple UI to interact w/ contract




## Testing

I wish to implement a high degree of test coverage. Below is a working list of these tests: 

Token minting: 
- [x] Total number of created tokens before mint is zero
- [x] Total number of created tokens increments on mint
- [x] No more than 5 tokens can be minted
- [x] Token will append tokenId to base URI

Token functionality:
- [ ] Tokens are able to be burnt

Contract mutability:
- [x] Tokens cannot be minted after contract is paused.
- [x] Tokens can be minted again after contract is unpaused.
- [ ] URI can be updated after mint by owner

Whitelist
- [x] Accounts must be able to be added to white list by contract owner.
- [ ] Accounts must not be able to be added by non-owner.

Integration
- [x] Whitelisted accounts can use whitelist mint function(See modifier in Whitelist contract and safeWhitelistMint func in Tool contract).
- [x] Non whitelisted accounts cannot use whitelist mint function.


## Deploying

After initial deployment to Rinkeby testnet I minted token #1 through the hardhat CLI. You will see from the screen shots below that the meta data made available from IPFS via token URI displays on the opensea testnet viewer. This can be viewed from https://testnets.opensea.io/assets/0x3215f99412a72f9660Aed1D8aE552e5876804693/1


![Screen Shot 2022-04-14 at 6 36 51 PM](https://user-images.githubusercontent.com/22263098/163490826-e689234f-66d9-494c-9f83-33c897dfb832.png)


![Screen Shot 2022-04-14 at 6 48 10 PM](https://user-images.githubusercontent.com/22263098/163490831-da73e3bf-cc29-4871-af34-490b71e92405.png)


Moving on from the CLI, I used https://oneclickdapp.com/ to interact with the contract. The video below shows that I was unable to mint a new token until unpausing the contract. After that the transaction is approved and the total number of minted tokens is incremented. These actions can be confirmed from etherscan(screenshot below video) and the new tokens are viewable from the following links:
https://testnets.opensea.io/assets/0x3215f99412a72f9660Aed1D8aE552e5876804693/2
https://testnets.opensea.io/assets/0x3215f99412a72f9660Aed1D8aE552e5876804693/3


https://user-images.githubusercontent.com/22263098/163630386-4ed24128-f5ab-4111-a9fe-1ac5aa74152b.mov


![Screen Shot 2022-04-15 at 4 36 30 PM](https://user-images.githubusercontent.com/22263098/163630390-845c875e-5d82-4171-8590-1c10c610d84d.png)

Beyond oneclickddApp, I wanted to build an intrerface. A simple react project for this contract is being developed in another repo. It can be found here : https://github.com/burke-md/toolWeb3





