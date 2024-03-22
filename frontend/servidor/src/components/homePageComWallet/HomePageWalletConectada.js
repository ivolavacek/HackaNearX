import React, { useContext } from 'react';
import './HomePageComWallet.css';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';

const HomePageWalletConectada = ( props ) => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    return (
        <>
            <div className={`total1 ${mode}`}>

                <div className={`titulo1 ${mode}`}>
                    <img src={logo} alt="logo" className="symbol1" />
                    <div className="texto11">Você se conectou ao GIV Access!</div>
                    <div className="texto21">Conheça nosso SBT (Soulbond Token) para acessar o curso!</div>
                </div>

                <div class="container1">
                    <div class={`square21 ${mode}`}><p className='paragrafos1'>Verifique a página de NFTs para clamar o SBT!</p>
                    <a href='http://localhost:3001/nfts'>NFTs</a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HomePageWalletConectada;