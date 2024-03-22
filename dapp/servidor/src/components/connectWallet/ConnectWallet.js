import React, { useState, useContext, useEffect } from 'react';
import { ethers } from 'ethers'; 
import './ConnectWallet.css';
import ModeContext from '../context/ModeContext';
import Saldo from '../saldo/Saldo';
import { faucet } from '../contratos/faucetContrato1';


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
          const provider = new ethers.BrowserProvider(window.ethereum);
  
          // Verificar se já há uma conta conectada
          const contas = await provider.listAccounts();

          if (contas.length > 0) {
           
           const enderecoAtual = await contas[0].address;
          //  console.log(enderecoAtual)
            setEndereco(enderecoAtual);
            console.log(endereco == "");
            
            setSigner(await provider.getSigner());
            setEnderecoConectado(formatarEndereco(contas[0].address));
            setShow('show');

            console.log('Conectado à MetaMask!');
            console.log('Endereço Conectado:', endereco);
           
            return;
          }

          if (endereco !== '') {
            resetarEstado();
            return;
          }
  
          // Solicitar permissão ao usuário para acessar a carteira MetaMask
          await provider.send('eth_requestAccounts', []);

  
          // Obter o endereço conectado
          setSigner(await provider.getSigner());
          setEndereco(await signer.getAddress());
          setEnderecoConectado(formatarEndereco(endereco));
          setShow('show');
          console.log('Conectado à MetaMask!');
          console.log('Endereço Conectado:', endereco);
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
      <div className="carteira">

        <div className={`buttons ${show}`}>
        <div className={`saldo ${show}`}>
        {endereco !== "" && endereco !== null && <Saldo address={endereco} />}
      </div>


          <button className={`connect-button ${mode}`} onClick={conectarMetaMask}>
          {enderecoConectado ? enderecoConectado : 'Conectar Carteira'}
          </button>

          <button className={`faucet ${show}`} onClick={() => faucet(signer)}>Faucet</button>
          <button className={`faucet ${show}`} onClick={() => resetarEstado()}>Desconectar</button>
        </div>
      </div>
    );
  }

  export default ConnectWallet;