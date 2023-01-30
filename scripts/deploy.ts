import { ethers } from "hardhat";

async function main() {
  const Image = await ethers.getContractFactory("ImageToken");
  const deployer = await Image.deploy("0x9B5428aE421f4f49415FCc810F386c495ff3CA6C");
  console.log("Contract address: ", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
