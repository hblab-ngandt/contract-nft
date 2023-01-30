import { ethers } from "hardhat";

async function main() {
  const Image = await ethers.getContractFactory("ImageToken");
  const deployer = await Image.deploy("0x45dD229f40732F32F2E46244b6F1b1fe9F55fcf5");
  console.log("Contract address: ", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
