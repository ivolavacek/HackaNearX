import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { ethers } from 'ethers'; 
import HomePage from '../components/homePage/HomePage';
import HomePageWalletConectada from '../components/homePage/HomePageWalletConectada';
import { ModeProvider } from '../components/context/ModeContext';

const Home = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        setAccounts(accounts);
      } catch (error) {

      }
    };

    fetchAccounts();
  }, []);

  return (
    <ModeProvider>
      <Header />
      {accounts.length > 0 ? <HomePageWalletConectada /> : <HomePage />}
    </ModeProvider>
  );
};

export default Home;
