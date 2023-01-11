import { ethers } from "hardhat";

async function main() {

  const Image = await ethers.getContractFactory("ImageToken");
  const deployer = await Image.deploy();
  console.log("Contract address: ", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
