# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```


### TokenUri response example

see more info here 

- https://nftschool.dev/reference/metadata-schemas/#ethereum-and-evm-compatible-chains
- https://docs.opensea.io/docs/metadata-standards

```json
{
    "name": "Zach -- NFT #: 1",
    "description": "This is an NFT that lets people play in the game Metaverse Slayer!",
    "image": "https://i.imgur.com/Us31O6j.gif",
    "attributes": [
        {
            "trait_type": "Health Points",
            "value": 100,
            "max_value": 100
        },
        {
            "trait_type": "Attack Damage",
            "value": 100
        },
        {
            "trait_type": "Seriousness",
            "value": 10
        },
        {
            "trait_type": "PoisonedFart",
            "value": 1
        }
    ]
}
```


