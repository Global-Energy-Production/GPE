import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import './App.css';

const injected = new InjectedConnector({ supportedChainIds: [1, 4] }); // Mainnet e Rinkeby

const GEP_ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address recipient, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function buy(uint256 amount) payable"
];
const GEP_ADDRESS = "0xSEU_CONTRATO_DEPLOYADO"; // Substitua pelo endereço real após deploy

function App() {
  const { activate, deactivate, account, library } = useWeb3React();
  const [balance, setBalance] = useState("0");
  const [amount, setAmount] = useState("");

  // Conectar carteira
  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.error("Erro ao conectar carteira:", error);
    }
  };

  // Desconectar carteira
  const disconnectWallet = () => {
    deactivate();
  };

  // Obter saldo GEP
  const fetchBalance = async () => {
    if (account && library) {
      const contract = new ethers.Contract(GEP_ADDRESS, GEP_ABI, library.getSigner());
      const bal = await contract.balanceOf(account);
      setBalance(ethers.utils.formatUnits(bal, 12)); // 12 decimais do GEP
    }
  };

  // Comprar GEP
  const buyGEP = async () => {
    if (!account || !library || !amount) return;
    try {
      const contract = new ethers.Contract(GEP_ADDRESS, GEP_ABI, library.getSigner());
      const tx = await contract.buy(ethers.utils.parseUnits(amount, 12), {
        value: ethers.utils.parseEther("0.1") // Exemplo: 0.1 ETH
      });
      await tx.wait();
      fetchBalance();
      setAmount("");
      alert("Compra realizada com sucesso!");
    } catch (error) {
      console.error("Erro ao comprar GEP:", error);
      alert("Falha na compra!");
    }
  };

  useEffect(() => {
    if (account) fetchBalance();
  }, [account, library]);

  return (
    <div className="App">
      <h1>GEP DEX</h1>
      {!account ? (
        <button onClick={connectWallet}>Conectar Carteira (MetaMask)</button>
      ) : (
        <div>
          <p>Carteira: {account}</p>
          <p>Saldo GEP: {balance} GEP</p>
          <button onClick={disconnectWallet}>Desconectar</button>
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Quantidade de GEP para comprar"
            />
            <button onClick={buyGEP}>Comprar GEP</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;