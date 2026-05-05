// server.js
const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota dinâmica usando parâmetro (recomendada para simplificar todas as turmas)
app.get('/api/alunos/:turma', (req, res) => {
  const turmaParam = req.params.turma.toUpperCase(); // Ex: "3A" ou "3B"
 
  // Filtra pelo id_turma recebido na URL
  const alunosTurma = db.alunos.filter(aluno => aluno.id_turma === turmaParam);
 
  // Ordena alfabeticamente
  alunosTurma.sort((a, b) => a.nome.localeCompare(b.nome));
 
  res.json(alunosTurma);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});