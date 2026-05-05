const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota para servir os alunos da turma 3A
app.use('/api/alunos/3A', (req, res) => {
const alunos3A = db.alunos.filter(aluno => aluno.id_turma === "3A");

// Ordena alfabeticamente
alunos3A.sort((a, b) => a.nome.localeCompare(b.nome));

res.json(alunos3A);
});

// Rota para servir os alunos da turma 3B
app.use('/api/alunos/3B', (req, res) => {
const alunos3B = db.alunos.filter(aluno => aluno.id_turma === "3B");

// Ordena alfabeticamente
alunos3A.sort((a, b) => a.nome.localeCompare(b.nome));

res.json(alunos3B);
});



app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});