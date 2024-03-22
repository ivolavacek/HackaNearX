import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import ConnectWallet from '../connectWallet/ConnectWallet';
import logoLight from '../../images/curso-template-v2.png';
import logoDark from '../../images/curso-template.png';
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
          return 'Curso';
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
              <p>Curso</p>
              <p>Template</p>
            </div>

            {/*switch button */}
            <SwitchButton />
          </div>
          
          {/*botões de navegação */}
          <nav>
            <ul className={`menu ${mode}`}>
              <li><Link to="/">Curso</Link></li>
              <li><a href="http://localhost:3001/">GIV Access</a></li>
            </ul>
          </nav>

          {/*botão de conectar */}
          <ConnectWallet />

        </header>
    );
  }

export default Header;