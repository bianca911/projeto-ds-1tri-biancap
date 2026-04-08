const express = require('express');
const db = require('./database'); // Importa o mock
const app = express();

app.get('/alunos', (req, res) => {
    res.json(db.alunos);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); 

