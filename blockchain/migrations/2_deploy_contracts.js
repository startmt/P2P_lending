const Manner = artifacts.require("Manner.sol");
const Interest = artifacts.require("Interest.sol");
const Lending = artifacts.require("Lending.sol");

module.exports = function(deployer) {
  deployer.deploy(Manner, 1, "ชาญศิลป์", "ทองคำ");
  deployer.deploy(Interest);
  deployer.deploy(Lending, [], [], [], [], -1, -1);
};
