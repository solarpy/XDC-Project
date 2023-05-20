const clientDataInput = require('./clientDataInput.js');
const { ethers } = require("hardhat");
const prompt = require('prompt-sync')();
const fs = require("fs");
require('dotenv').config();

// Contract Artifacts
const insurance_artifacts = require("../artifacts/contracts/insurance.sol/Insure.json");
const client_artifacts = require("../artifacts/contracts/insurance.sol/Client.json");
// Provider
const provider = new ethers.providers.WebSocketProvider("wss://ws.apothem.network");
// Signer
const signer = new ethers.Wallet(process.env.APOTHEM_PRIVATE_KEY, provider);
// Contract
const client = new ethers.Contract("0x3f21BC64076e7c9ed8695d053DCCBE6D8d5E6f43", contract.abi, signer);

async function main() {

  while (true) {

    const data = clientDataInput.input();

    const ClientInfo = await ethers.getContractFactory("Client");
    const clientinfo = await ClientInfo.deploy();
    await clientinfo.deployed();

    console.log(`insurance.sol has been deployed to ${clientinfo.address}`);
    
    
    // Wait for all of the Client Information to be stored
    // const txc = await client.update(data.emailAddress, data.policy, data.duration, data.date_of_policy, data.phone, data.name, data.price);
    // const receipt = await txc.wait()
    //   console.log(receipt.events);

    }
  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
