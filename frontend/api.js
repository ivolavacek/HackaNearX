const express = require('express');
const path = require('path');

const app1 = express();
const app2 = express();

const PORT1 = 3001;
const PORT2 = 3002;

// Roteamento para o primeiro projeto React
app1.use('/', express.static(path.join(__dirname, 'servidor', 'build')));

// Roteamento para o segundo projeto React
app2.use('/', express.static(path.join(__dirname, 'curso', 'build')));

app1.listen(PORT1, () => {
    console.log(`Servidor rodando na porta ${PORT1}`);
});

app2.listen(PORT2, () => {
    console.log(`Curso rodando na porta ${PORT2}`);
});