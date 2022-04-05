const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        // Names
        [
            "Zach",
            "Michael Scott",
            "John Wick",
        ],
        // Images
        [
            "https://i.imgur.com/Us31O6j.gif",
            "https://i.imgur.com/585nfLl.jpeg",
            "https://i.imgur.com/FEJQhUU.jpeg",
        ],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values,
        [10, 50, 100],                      // Seriousness values,
        [true, false, false],                       // Poisoned Fart values,
        "Lord Voldemort",
        "https://i.imgur.com/3jZVrKi.jpeg",
        10000,  //boss HP
        50 // boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    // let txn;
    // // We only have three characters.
    // // an NFT w/ the character at index 2 of our array.
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
  
    // txn = await gameContract.attackBoss();
    // await txn.wait();
  
    // txn = await gameContract.attackBoss();
    // await txn.wait();
  
    // console.log("Done!");

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();