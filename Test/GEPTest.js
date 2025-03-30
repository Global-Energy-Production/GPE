const { expect } = require("chai");

describe("GlobalEnergyProduction", function () {
  let GEP, gep, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    GEP = await ethers.getContractFactory("GlobalEnergyProduction");
    gep = await GEP.deploy(owner.address, owner.address, owner.address);
    await gep.deployed();
  });

  it("Should deploy with correct total supply", async function () {
    expect(await gep.totalSupply()).to.equal(ethers.utils.parseUnits("1500000000", 12));
  });

  it("Should apply buy fee correctly", async function () {
    await gep.transfer(addr1.address, ethers.utils.parseUnits("1000", 12));
    await gep.connect(addr1).buy(ethers.utils.parseUnits("100", 12));
    const balance = await gep.balanceOf(addr1.address);
    expect(balance).to.be.closeTo(ethers.utils.parseUnits("898.3", 12), ethers.utils.parseUnits("0.1", 12));
  });
});