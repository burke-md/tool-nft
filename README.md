# Tool

The goal of this project is to create a smart contract. This contract will represent in game tools. For example a black smith's hammar or fire tongues. The contract shall fulfill the below requirments:

- [x] Create an ERC721 NFT
- [x] With a max supply of 5 pieces
- [ ] Each token will hold an attribute ex. type of tool.
- [x] Contract must be pausable
- [ ] Contract must contain list for 'pre-sale' buyers(whitelist).
- [ ] Contract must independantly 'unpause' for pre-sale approved buyers.
- [x] Tokens must be burnable
- [x] Use a URI to point to external data
  - [ ] Must be able to update URI
  - [ ] Must use IPFS
- [ ] Implement a proxy, capable of updating deployed contract
- [x] Implement unit tests
  - [ ] See below for comprhensive list of tests to complete
- [ ] Deploy to testnet
- [ ] Build simple UI to interact w/ contract




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
- [ ] Accounts must not be able to be added by other accounts.

Integration
- [x] Whitelisted accounts can use whitelist mint function(See modifier in Whitelist contract and safeWhitelistMint func in Tool contract).
- [x] Non whitelisted accounts cannot use whitelist mint function.