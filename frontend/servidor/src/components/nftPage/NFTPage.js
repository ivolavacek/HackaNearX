import React from 'react';
import './NFTPage.css';
import NFTMint  from '../execute/Execute';
import  { useState } from 'react';

const NFTPage = () => {
    const [acao, setAcao] = useState(null);

    return (
<<<<<<< Updated upstream
        <div className="NFT">
            <button onClick={() => setAcao("mint")}>Mint</button>
            {acao === "mint" && <NFTMint func={"mint"} />} 

            <button onClick={() => setAcao("verificar")}>Verificar NFT</button>
            {acao === "verificar" && <NFTMint func={"verificar"} />} 
=======
        <div className={`NFT1 ${mode}`}>

            <div className={`titulo1 ${mode}`}>
                <img src={logo} alt="logo" className="symbol1" />
                <div className="texto1">Compre aqui seu GIV Access!</div>
            </div>

            <div className='squareNFT1'>
                <p><b>SoulBound Token <br/>de Acesso ao Curso</b></p>
                <button onClick={() => handleClick("mint")}>Mint</button>
                <button onClick={() => handleClick("verificar")}>Verificar NFT</button>
                {acao && <NFTMint func={acao} />}
            </div>
            
>>>>>>> Stashed changes
        </div>
    );
};

export default NFTPage;
