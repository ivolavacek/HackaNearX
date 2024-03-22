import React from 'react';
import Header from '../components/header/Header';
import HomePage from '../components/homePage/HomePage';
<<<<<<< Updated upstream
=======
import HomePageOwner from '../components/homePageOwner/HomePageOwner';
>>>>>>> Stashed changes
import { ModeProvider } from '../components/context/ModeContext';


const Curso = () => (
  <ModeProvider>
    <Header />
    <HomePage />
  </ModeProvider>
);

export default Curso;