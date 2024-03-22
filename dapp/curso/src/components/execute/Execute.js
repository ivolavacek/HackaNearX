import React from 'react';
import './Execute.css';
import { useState, useEffect } from 'react';
import { verificarNFT } from '../contratos/verificaContrato2';

function NFTMint ({ func }) {
 
  const [NFT, setNFT] = useState(false);

  useEffect(() => {
    async function NFTFunctions() {
      try {
        if (func === "verificar") {
          setNFT( await verificarNFT() ); //bool
          console.log("NFT: ", {NFT})
        }

      } catch (error) {
        console.error('Erro ao buscar NFT:', error);
      }
    }

    NFTFunctions();
  }, []);

  return (
    <div className="execute">
      teste
    </div>
  );
}

export default NFTMint;