import React, { useState, useContext, useEffect } from 'react';
import { ethers } from 'ethers'; 
import './ConnectWallet.css';
import ModeContext from '../context/ModeContext';


function ConnectWallet() {
  const { mode } = useContext(ModeContext);
  const [enderecoConectado, setEnderecoConectado] = useState('');
  const [endereco, setEndereco] = useState('');
  const [signer, setSigner] = useState();
  const [show, setShow] = useState('noshow');
  
  useEffect(() => {
    conectarMetaMask();
}, []);
    async function conectarMetaMask() {
      try {
        if (window.ethereum) {
          // Solicitar permissão ao usuário para acessar a carteira MetaMask
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
  
          // Obter o endereço conectado
          const signer = await provider.getSigner();
          setSigner(signer);
          const endereco = signer.address;
          setEndereco(endereco);

          if (enderecoConectado) {
            // Desconectar a carteira se já estiver conectada
            // setEnderecoConectado('');

          } else {
            // Conectar a carteira se ainda não estiver conectada
            setEnderecoConectado(formatarEndereco(endereco));
            console.log('Conectado à MetaMask!');
            console.log('Endereço Conectado:', endereco);
           
          }
        } else {
          console.error('MetaMask não detectado!');
        }
      } catch (error) {
        console.error('Erro ao conectar à MetaMask:', error);
      }
    }
    async function resetarEstado() {
      setEndereco('');
      setSigner(null);
      setEnderecoConectado('');
      console.log('Desconectado da MetaMask!');
      
      setShow('noshow');
    }


    function formatarEndereco(endereco) {
      // Verifica se o endereço tem a formatação correta
      if (/^0x[0-9a-fA-F]{40}$/.test(endereco)) {
        const prefixo = endereco.substring(0, 6);
        const sufixo = endereco.substring(endereco.length - 6);

        return `${prefixo}...${sufixo}`;
      } else {
        console.error('Endereço inválido:', endereco);
        return endereco;
      }
    }
  
    return (
      <div className={`buttons ${show}`}>
        <button className={`connect-button ${mode}`} onClick={conectarMetaMask}>
        {enderecoConectado ? enderecoConectado : 'Conectar Carteira'}
         
        </button>
        {enderecoConectado ?         <button className={`faucet ${show}`} onClick={() => resetarEstado()}>Desconectar</button> : ''}

      </div>
    );
  }

  export default ConnectWallet;