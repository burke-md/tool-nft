# Tools

The goal of this project is to:

- [x] Create an ERC721 NFT
- [ ] With a fixed supply of 100 pieces
- [x] Contract must be pausable
- [x] Tokens must be burnable
- [x] Use a URI to point to external data
  - [ ] Must be able to update URI
  - [ ] Must use IPFS
- [ ] Implement a proxy, capable of updating deployed contract
- [x] Implement unit tests
  - [ ] See below for comprhensive list of tests to complete
- [ ] Deploy to testnet
- [ ] Build simple UI to interact w/ contract


### Testing

I wish to implement a high degree of test coverage. Below is a working list of these tests: 


- [x] Total number of created tokens before mint is zero.
- [ ] Total number of created tokens increments on mint.

- [ ] Tokens are able to be burnt

- [ ] Token contract is pauseable(pause/unpause funcs work as expected).

- [ ] URI can be updated after mint by owner.