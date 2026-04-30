// aluno.js
const db = require('./database.js');

function obterAlunosTurma3A() {
// Filtra apenas os alunos da turma 3A
const alunos3A = db.alunos.filter(aluno => aluno.id_turma === "3A");

// Organiza a lista em ordem alfabética (A-Z)
alunos3A.sort((a, b) => a.nome.localeCompare(b.nome));

return alunos3A;
}

module.exports = { obterAlunosTurma3A };