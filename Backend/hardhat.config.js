require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: 'apothem',
  networks: {
    apothem: {
      url: process.env.APOTHEM_NETWORK_URL,
      accounts: [process.env.APOTHEM_PRIVATE_KEY]
    }
  }
};
