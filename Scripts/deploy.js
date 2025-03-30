const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const GEP = await hre.ethers.getContractFactory("GlobalEnergyProduction");
  const gep = await GEP.deploy(
    "0xSEU_ADMIN_WALLET",
    "0xSEU_INVESTMENT_WALLET",
    "0xSEU_BUYBACK_WALLET"
  );
  await gep.deployed();
  console.log("GEP deployed to:", gep.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});