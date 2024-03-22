import React, { useContext, useState } from 'react';
import './NFTPage.css';
import NFTMint from '../execute/Execute';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';


const NFTPage = () => {
    const { mode } = useContext(ModeContext);
    const [acao, setAcao] = useState(null);
    const logo = mode === 'Light' ? logoLight : logoDark;

    const handleClick = (func) => {
        setAcao(func);
        setTimeout(() => {
            setAcao(null);
        }, 2000); // Remover a ação após 2 segundos
    };

    return (
        <div className="Fundo">
            <div className="NFT">
                <div className="titulo">
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto1">Compre aqui seu GIV Access!</div>
                </div>
                <div className='squareNFT'>
                    <p>Soulbound Token <br/>de Acesso ao Curso</p>
                    <button onClick={() => handleClick("mint")}>Mint</button>
                    <button onClick={() => handleClick("verificar")}>Verificar NFT</button>
                    {acao && <NFTMint func={acao} />}
                </div>
            </div>
        </div>
    );
};

export default NFTPage;
