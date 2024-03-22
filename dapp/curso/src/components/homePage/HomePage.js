import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import logoLight from "../../images/curso-template-v2.png";

import logoDark from "../../images/curso-template.png";
import ModeContext from "../context/ModeContext";

const HomePage = () => {
  const { mode } = useContext(ModeContext);
  const logo = mode === "Light" ? logoLight : logoDark;

  return (
    <>
      <div className={`total ${mode}`}>
        <div className={`titulo ${mode}`}>
          <img src={logo} alt="logo" className="symbol" />
          <div className="texto1">Bem vindo ao Curso da NearX!</div>
          <div className="texto2">
            Conecte sua Wallet caso tenha o nosso Soulbound Token para acessar
            esse curso!
          </div>
        </div>
        <div class="container">
          <div class="square">
            <p className="paragrafos">
              Conheça este curso sobre a Optimism Blockchain adquirindo o GIV
              Access no cabeçalho da página!
            </p>
          </div>
          <div class="square">
            <p className="paragrafos">
              Aqui você aprenderá sobre conceitos de Layer 2 e
              SmartContracts na rede da Optimism, contando com certificado no final!
            </p>
          </div>
          <div class="square">
            <p className="paragrafos">
              Realize seu primeiro passo na carreira de desenvolvedor
              Blockchain! <br />
              Adquira já nosso Soulbound Token.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
