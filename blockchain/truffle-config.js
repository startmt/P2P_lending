const HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: process.env.GANACHE_PORT,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: process.env.GANACHE_PORT,
      network_id: "*"
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY
        ),
      network_id: 3,
      gas: 3000000,
      gasPrice: 10000000000
    }
  }
};
