const { ethers } = require("hardhat");

async function main() {

  const ClientInfo = await ethers.getContractFactory("Client");
  const clientinfo = await ClientInfo.deploy();
  await clientinfo.deployed();

  console.log(`insurance.sol has been deployed to ${clientinfo.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});