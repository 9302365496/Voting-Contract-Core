const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const members = [
    "0xcA0628737469Fb77bCE92Aee8a3233f240acB63c", // Replace with real member addresses
    //vishraj key
    "0x0c6B5ba38d0bAD79D88E8Ee77B4B5688497Db687"
  ];

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
