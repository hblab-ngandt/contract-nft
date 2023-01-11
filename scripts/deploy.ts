import { ethers, upgrades } from "hardhat";

async function main() {
  const Image = await ethers.getContractFactory("ImageToken");
  const deployer = await upgrades.deployProxy(Image);
  await deployer.deployed();
  console.log("Contract address: ", deployer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main();
