import React from 'react';
import Header from '../components/header/Header';
import HomePage from '../components/homePage/HomePage';
<<<<<<< Updated upstream
=======
import HomePageWalletConectada from '../components/homePageComWallet/HomePageWalletConectada';
>>>>>>> Stashed changes
import { ModeProvider } from '../components/context/ModeContext';


<<<<<<< Updated upstream
const Home = () => (
  <ModeProvider>
    <Header />
    <HomePage />
  </ModeProvider>
);
=======
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
>>>>>>> Stashed changes

export default Home;
