// aluno.js
const db = require('./database.js');

function obterAlunosTurma3A() {
// Filtra apenas os alunos da turma 3A
const alunos3A = db.alunos.filter(aluno => aluno.id_turma === "3A");

// Organiza a lista em ordem alfabética (A-Z)
alunos3A.sort((a, b) => a.nome.localeCompare(b.nome));

return alunos3A;
}

function obterAlunosTurma3B() {
// Filtra apenas os alunos da turma 3B
const alunos3B = db.alunos.filter(aluno => aluno.id_turma === "3B");

// Organiza a lista em ordem alfabética (A-Z)
alunos3B.sort((a, b) => a.nome.localeCompare(b.nome));

return alunos3B;

}

module.exports = { obterAlunosTurma3A };