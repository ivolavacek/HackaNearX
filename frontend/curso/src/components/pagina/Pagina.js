import React, { useContext } from 'react';
import './Pagina.css';
import logoLight from '../../images/curso-template.png';
import logoDark from '../../images/curso-template-v2.png';
import ModeContext from '../context/ModeContext';

const Pagina = ( props ) => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    return (
        <div className={`pagina ${mode}`}>
            <h1>Curso Template</h1>
            <h2>{props.texto}</h2>
            <img src={logo} alt="logo" className="logo-pagina" />
        </div>
    );
};

export default Pagina;