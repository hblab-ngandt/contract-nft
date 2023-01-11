import { expect } from "chai";
import { ethers } from "hardhat";

describe('ImageToken', function () {
    before(async function () {
        this.Image = await ethers.getContractFactory('ImageToken');
    });

    this.beforeEach(async function () {
        this.image = await this.Image.deploy();
        await this.image.deployed();
    });

    // Test case
    it('retrieve returns a value previously stored', async function () {
        // Store a value
        await this.image.safeMint('0x000000');

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await this.image.retrieve()).toString()).to.equal('0x000000');
    });
})


