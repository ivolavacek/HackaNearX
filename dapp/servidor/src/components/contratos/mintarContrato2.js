const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "balanceToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getContractAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "locked",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "safeMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "ownsToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
const { ethers } = require('ethers');
const { verificarSaldo } = require('./saldoContrato1');
const { compraNFT } = require('./compraContrato1');
const { verificarNFT } = require('./verificaContrato2');

const contractAddressERC721 = '0xD73bAb8F06DB28c87932571f87D0D2C0FDF13D94';

const provider = new ethers.JsonRpcProvider('https://sepolia.optimism.io');
const privateKey = 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const wallet = new ethers.Wallet(privateKey, provider);
const contractERC721 = new ethers.Contract(contractAddressERC721, contractABI, wallet);

async function mintarNFT() {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const saldo = await verificarSaldo(signer); //uint256
    const saldoNumerico = Number(saldo.toString()) * 10**-18;
    let resultado = false;
    const temNFT = await verificarNFT(); //bool
    console.log(signer.address)
  
    if (saldoNumerico >= 50 && temNFT === false) {
      const transferiu = await compraNFT(); //bool
            
      if (transferiu) {
        resultado = await contractERC721.safeMint(signer.address, "https://givaccess.com/1115002");
        if(resultado){
          window.alert("Parabéns, você clamou o SBT para o acesso ao curso! Recarregue a página!")
        }
      }
    } else {
      if(saldoNumerico <50){
        window.alert("Saldo insuficiente, transação não realizada.")
      }else{
        window.alert("NFT já coletado!")
      }
    }
 
    console.log("Contrato2 | Mintar | Saldo: ", saldoNumerico); //unit256
    console.log("Contrato2 | Mintar | Resultado 'safeMint': ", resultado); //function
    return { saldoNumerico, resultado }
  } catch (error) {

     window.alert("Conecte a wallet antes de realizar o Mint!");

  
  }
}

module.exports = {
    mintarNFT //function
  };
