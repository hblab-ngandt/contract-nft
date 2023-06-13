import { ethers } from "hardhat";

async function main() {
  const GRToken = await ethers.getContractFactory("GRToken");
  const grToken = await GRToken.deploy();
  console.log("Contract address: ", grToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });