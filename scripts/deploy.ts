import { ethers, upgrades } from "hardhat";

async function main() {
  const Image = await ethers.getContractFactory("ImageToken");
  const deployer = await upgrades.deployProxy(Image);

  await deployer.deployed();
  console.log("Contract address: ", deployer.address);
}

main();