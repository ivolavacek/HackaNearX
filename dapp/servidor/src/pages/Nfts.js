import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; 
import Header from '../components/header/Header';
import NFTPage from '../components/nftPage/NFTPage';
import NFTPageOwner from '../components/nftPage/NFTPageOwner';
import { ModeProvider } from '../components/context/ModeContext';
import { verificarNFT } from '../components/contratos/verificaContrato2';

const Nfts = () => {

  const [possuiNft, setPossuiNft] = useState(false);
 
  useEffect(() => {
    const checkPossuiNFT = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();

        if (accounts.length > 0) {
          const possuiNFT = await verificarNFT();
          setPossuiNft(possuiNFT);
        
        }
      } catch (error) {
        console.error("Erro ao verificar NFT:", error);
      }
    };

    checkPossuiNFT();
  }, []);

  return (
    <ModeProvider>
      <Header />
      {possuiNft ? <NFTPageOwner /> : <NFTPage />}
    </ModeProvider>
  );
};

export default Nfts;
