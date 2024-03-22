import React, { useState, useEffect } from 'react';
import './Saldo.css';
const { verificarSaldo } = require('../contratos/saldoContrato1'); 


function Saldo (endereco) {
  const [saldo, setSaldo] = useState(null);

  async function fetchSaldo() {
    try {
      const resultado = await verificarSaldo(endereco);
      const saldoNumero =  Number(resultado);
      const saldoDividido = saldoNumero/10**18;
      setSaldo(saldoDividido);
      
      console.log('Saldo:', saldo);
    } catch (error) {
      console.error('Erro ao verificar saldo:', error);
    }
  }

  useEffect(() => {
    fetchSaldo();
  }, []);
  
  return (
    <div className="saldo">
      <p>Saldo</p>
      <p>{isNaN(saldo) ? 0 : saldo} GIV</p>
    </div>
  );
}


export default Saldo;