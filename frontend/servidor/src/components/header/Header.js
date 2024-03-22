import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import ConnectWallet from '../connectWallet/ConnectWallet';
import logoLight from '../../images/logo-v8.png';
import logoDark from '../../images/logo-v6.png';
import ModeContext from '../context/ModeContext';
import SwitchButton from '../switchButton/SwitchButton';


function Header() {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;
    const location = useLocation();

    useEffect(() => {
      document.title = `${getPageName(location.pathname)}`;
    });

    const getPageName = (pathname) => {
      switch (pathname) {
        case '/':
          return 'GIV Access';
        case '/nfts':
          return 'GIV Access - NFTs';
        case '/debug':
          return 'GIV Access - Debug';
        case '/explorer':
          return 'GIV Access - Explorer';
        default:
          return 'Curso Template';
      }
    };

    return (
        <header className={`menu-bar ${mode}`}>
          <div className="parte-esq">
            {/* Logo */}
            <img src={logo} alt="logo" className="logo" />

            {/* Nome do grupo */}
            <div className="grupo">
              <p>GIV</p>
              <p>Access</p>
            </div>

            {/*switch button */}
            <SwitchButton />
          </div>
          
          {/*botões de navegação */}
          <nav>
            <ul className={`menu ${mode}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nfts">NFTs</Link></li>
              <li><Link to="/debug">Debug</Link></li>
              <li><Link to="/explorer">Explorer</Link></li>
              <li><a href="http://localhost:3002">Curso</a></li>
            </ul>
          </nav>

          {/*botão de conectar */}
          <ConnectWallet />

        </header>
    );
  }

export default Header;