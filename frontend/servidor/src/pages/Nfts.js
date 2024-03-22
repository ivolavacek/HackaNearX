import React from 'react';
import Header from '../components/header/Header';
import NFTPage from '../components/nftPage/NFTPage';
<<<<<<< Updated upstream
=======
import NFTPageOwner from '../components/nftPageOwner/NFTPageOwner';
>>>>>>> Stashed changes
import { ModeProvider } from '../components/context/ModeContext';


const Nfts = () => (
  <ModeProvider>
    <Header />
    <NFTPage />
  </ModeProvider>
);

export default Nfts;
