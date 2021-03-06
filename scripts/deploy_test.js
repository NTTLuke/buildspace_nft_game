const { ethers } = require("hardhat");

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('Greeter');
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    const [owner, feeCollector, operator] = await ethers.getSigners();
    await owner.sendTransaction({
        to: gameContract.address,
        value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ether
    });

  

    // let txn;
    // txn = await gameContract.receive({value : ethers.utils.parseEther("0.01")});
    // await txn.wait();

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