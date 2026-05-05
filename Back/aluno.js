const db = require('./database.js');

function obterAlunosTurma3A() {
  const alunos3A = db.alunos.filter(aluno => aluno.id_turma === "3A");
  alunos3A.sort((a, b) => a.nome.localeCompare(b.nome));
  return alunos3A;
}

function obterAlunosTurma3B() {
  const alunos3B = db.alunos.filter(aluno => aluno.id_turma === "3B");
  alunos3B.sort((a, b) => a.nome.localeCompare(b.nome));
  return alunos3B;
}

// Exporte ambas as funções para poder usá-las em outras partes do sistema
module.exports = { obterAlunosTurma3A, obterAlunosTurma3B };