<<<<<<< Updated upstream
import React, { useContext, useEffect, useState } from 'react';
import './HomePage.css';
import logoLight from '../../images/curso-template-v2.png';
import logoDark from '../../images/curso-template.png';
import ModeContext from '../context/ModeContext';
import { verificarNFT } from '../contratos/verificaContrato2';
=======
import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import logoLight from "../../images/curso-template.png";
import logoDark from "../../images/curso-template-v2.png";
import ModeContext from "../context/ModeContext";
>>>>>>> Stashed changes

const HomePage = () => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;
    const [desbloqueio, setDesbloqueio] = useState(false);

<<<<<<< Updated upstream
    async function desbloqueia() {
        try {
            setDesbloqueio( await verificarNFT() );
            console.log("Página bloqueada: ", desbloqueio);
        } catch (error) {
        console.error('Erro ao buscar NFT:', error);
        }
    }

    useEffect(() => {
        desbloqueia();
      }, []);

    return (
        <>
            <div className={`total ${mode}`}>
                <div className={`titulo ${mode}`}>
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto1">Bem vindo ao GIV Access!</div>
                    <div className="texto2">Conecte sua Wallet para ter acesso as nossa funcionalidades!</div>
                </div>
                <div class="container">
                    <div class="square">
                        <p>"Tem NFT? " {desbloqueio ? 'sim' : 'não'}</p>
                    </div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
            </div>
        </>
    );
=======
  return (
    <>
      <div className={`total1 ${mode}`}>
        <div className={`titulo1 ${mode}`}>
          <img src={logo} alt="logo" className="symbol1" />
          <div className="texto11">Bem vindo ao Curso da NearX!</div>
          <div className="texto21">Conecte sua Wallet caso tenha o nosso Soulbound Token para acessar esse curso!</div>
        </div>

        <div class="container1">
          <div class="square1">
            <p className="paragrafos1">
              Conheça este curso sobre a Optimism Blockchain adquirindo o GIV
              Access no cabeçalho da página!
            </p>
          </div>
          <div class="square1">
            <p className="paragrafos1">
              Aqui você aprenderá sobre conceitos de Layer 2 e
              SmartContracts na rede da Optimism, contando com certificado no final!
            </p>
          </div>
          <div class="square13">
            <p className="paragrafos1">Realize seu primeiro passo na carreira de desenvolvedor Blockchain!</p>
            <p></p>
            <p className="paragrafos13">Adquira já nosso SoulBound Token.</p>
          </div>
        </div>
      </div>
    </>
  );
>>>>>>> Stashed changes
};

export default HomePage;