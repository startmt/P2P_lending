const Interest = artifacts.require("Interest.sol");

module.exports = function(deployer) {
  deployer.deploy(Interest);
};
