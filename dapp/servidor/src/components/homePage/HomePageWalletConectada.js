import React, { useContext } from 'react';
import './HomePage.css';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';

const HomePageWalletConectada = () => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    return (
        <>
            <div className={`total ${mode}`}>
                <div className={`titulo ${mode}`}>
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto1">Você se conectou ao GIV Access!</div>
                    <div className="texto2">Seu acesso através de um SBT (Soulbond Token)!</div>
                </div>
                <div class="container">
                    {/* <div class="square">
                        
                    </div> */}
                    <div class="square2"><p className='paragrafos'>Verifique a página de NFTs para clamar o SBT!</p>
                    <a href='http://localhost:3001/nfts'>NFTs</a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HomePageWalletConectada;