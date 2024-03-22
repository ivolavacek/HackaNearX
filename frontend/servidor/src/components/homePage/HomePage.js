import React, { useContext } from 'react';
import './HomePage.css';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';

const HomePage = ( ) => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    return (
        <>
            <div className={`total ${mode}`}>

                <div className={`titulo ${mode}`}>
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto1">Bem vindo ao GIV Access!</div>
                    <div className="texto2">Conecte sua Wallet para ter acesso as nossa funcionalidades!</div>
                </div>
<<<<<<< Updated upstream
                <div class="container">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
=======

                <div class={`container ${mode}`}>
                    <div class="square"><p className='paragrafos'>Com o GIV Access você pode visualizar seus NFTs, transações e funções de contrato.</p></div>
                    <div class="square"><p className='paragrafos'>Utilize o Debug para realizar as operações do contrato, verificando também a saída dos dados.</p></div>
                    <div class="square"><p className='paragrafos'>Faça o Faucet do Token GIV, colete o SBT (SoulBound Token) e comece agora a utilizar a plataforma de cursos!</p></div>
                    <div class="square"><p className='paragrafos'>Você sabia que um SoulBound Token se diferencia dos NFTs pela sua conexão única e intransferível?</p></div>
>>>>>>> Stashed changes
                </div>

            </div>
        </>
    );
};

export default HomePage;