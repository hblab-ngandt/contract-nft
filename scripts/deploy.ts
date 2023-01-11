import { ethers } from "hardhat";

async function main() {
  const Image = await ethers.getContractFactory("ImageToken");
  const deployer = await Image.deploy("0x932e5DB0d9C862432809feF32bd39661599a6561");
  console.log("Contract address: ", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
