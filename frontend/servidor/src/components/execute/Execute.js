import React from 'react';
import './Execute.css';
import { useState, useEffect } from 'react';
import { mintarNFT } from '../contratos/mintarContrato2'; // Certifique-se de ajustar o caminho do arquivo conforme necessário
import { verificarNFT } from '../contratos/verificaContrato2';

function NFTMint ({ func }) {
 
  const [saldo, setSaldo] = useState(0);
  const [mint, setMint] = useState(null);
  const [nft, setNft] = useState(false);

  useEffect(() => {
    async function NFTFunctions() {
      try {
        if (func === "mint") {
          const { saldoNumerico, resultado } = await mintarNFT();
          setSaldo(saldoNumerico);
          setMint(resultado);
          console.log("NFTPage | Execute | Mint: ", mint); //function
          console.log("NFTPage | Execute | Saldo: ", saldo); //function
        }

        if (func === "verificar") {
          setNft( await verificarNFT() ); //bool
          console.log("NFTPage | Execute | NFT: ", nft)
        }

      } catch (error) {
        console.error('Erro ao buscar NFT:', error);
      }
    }

    NFTFunctions();
  }, []);

  return (
    <div className="execute">
      <div className="mintFeedback">
        {saldo ? saldo : 'não tem saldo'}
        {mint ? 'você conseguiu mintar' : 'não foi possivel mintar'}
      </div>
      <div className="tokenFeedback">
        {{nft} ? 'tem NFT' : 'não tem NFT'}
      </div>
    </div>
  );
}

export default NFTMint;