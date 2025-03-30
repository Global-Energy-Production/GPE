const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [signer] = await ethers.getSigners();
  const gepAddress = "0xSEU_CONTRATO_DEPLOYADO";
  const uniswapRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const gep = new ethers.Contract(gepAddress, /* GEP_ABI */, signer);
  const router = new ethers.Contract(uniswapRouter, /* UNISWAP_ROUTER_ABI */, signer);

  const amountGEP = ethers.utils.parseUnits("1000000", 12);
  const amountETH = ethers.utils.parseEther("1");

  await gep.approve(uniswapRouter, amountGEP);
  await router.addLiquidityETH(
    gepAddress,
    amountGEP,
    0,
    0,
    signer.address,
    Math.floor(Date.now() / 1000) + 60 * 10,
    { value: amountETH }
  );
  console.log("Liquidez adicionada ao Uniswap!");
}

main().catch(console.error);