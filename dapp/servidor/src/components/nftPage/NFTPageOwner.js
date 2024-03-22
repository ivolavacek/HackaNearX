import React, { useContext, useState, useEffect } from 'react';
import './NFTPage.css';
import NFTMint from '../execute/Execute';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';
import { verificaCertificado } from '../contratos/verificaCertificado';


const NFTPage = () => {
    const { mode } = useContext(ModeContext);
    const [possuiCertificado, setPossuiCertificado] = useState(false);
    const logo = mode === 'Light' ? logoLight : logoDark;

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultado = await verificaCertificado();
                setPossuiCertificado(resultado);
            } catch (error) {
                console.error('Erro ao buscar certificado:', error);
                // Lidar com o erro, se necessário
            }
        };
    
        fetchData();
    
    }, []);
    

    return (
        <div className="Fundo">
            <div className="NFT">
                <div className="titulo">
                    <img src={logo} alt="logo" className="symbol" />
                    <div className="texto2">Parabéns por se juntar a nós!<br/>
                     Explore agora os benefícios indo para a aba "<a href='http://localhost:3002'>Cursos</a>"</div>
                </div>
                <div className='Nfts'>
                <div className='squareNFTOwner'>
                    <p>GIV Access</p>
                    <p>Este Soulbound token lhe dá acesso ao Curso 1 da nossa plataforma.</p>
                    <a href='http://localhost:3002'>Cursos</a>
                    
                </div>
                <div className='squareNFTOwner certificado' style={{ display: possuiCertificado ? 'flex' : 'none' }}>
                    <p>Certificado Conclusão Curso Blockchain Optimism da NearX</p>
                    <p>Parabéns por ter concluido o curso!</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NFTPage;
