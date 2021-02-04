const Migrations = artifacts.require("TRESS");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
