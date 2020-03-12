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
      provider: function() {
        return new HDWalletProvider(
          process.env.PRIVATE_KEY,
          `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
        );
      },
      network_id: 3,
      skipDryRun: true,
      gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
