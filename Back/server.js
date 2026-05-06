const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota para buscar alunos por turma
app.get('/api/alunos/:turma', (req, res) => {
  const turmaParam = req.params.turma.toUpperCase(); // Ex: "3A" ou "3B"
 
  // Filtra pelo id_turma recebido na URL
  const alunosTurma = db.alunos.filter(aluno => aluno.id_turma === turmaParam);
 
  // Ordena alfabeticamente
  alunosTurma.sort((a, b) => a.nome.localeCompare(b.nome));
 
  res.json(alunosTurma);
});

// Nova rota para buscar todos os registros ou filtrar por aluno
app.get('/api/registros', (req, res) => {
  res.json(db.registros);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});