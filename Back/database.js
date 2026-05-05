// database.js

const database = {
  // Dados do professor conforme o print (Prof. Mateus - TI)
  professor_logado: {
    nome: "Prof. Mateus",
    materia: "Tecnologia Da Informação" // [cite: 20]
  },

  // Lista de alunos da turma 3°A
  // Adicionei nomes com iniciais diferentes para testar seu sistema de busca [cite: 30, 64]
  alunos: [
    { id: 1, nome: "Allan Cordeiro", id_turma: "3A" },
    { id: 2, nome: "Bianca Moreira", id_turma: "3A" },
    { id: 3, nome: "Christopher Whaither", id_turma: "3A" },
    { id: 4, nome: "Giovanna Gabrielly", id_turma: "3A" },
    { id: 5, nome: "Maykon da Costa", id_turma: "3A" }
  ],

  // Registro de Faltas e Presenças (Obrigatório para UC003) [cite: 68, 70]
  // id_tipo: 1 para Presença, 0 para Falta [cite: 22, 23]
  registros: [
    // Histórico do aluno 1 (Allan)
    { id_aluno: 1, data: "2026-04-27", status: "Presença", id_tipo: 1 },
    { id_aluno: 1, data: "2026-04-28", status: "Falta", id_tipo: 0 },
   
    // Histórico da aluna 3 (Bianca)
    { id_aluno: 3, data: "2026-04-27", status: "Presença", id_tipo: 1 },
    { id_aluno: 3, data: "2026-04-28", status: "Presença", id_tipo: 1 }
  ],

  alunos: [
    { id: 6, nome: "Malévola Menezes", id_turma: "3B" },
    { id: 7, nome: "Soso Careca", id_turma: "3B" },
    { id: 8, nome: "Mc Paiva", id_turma: "3B" },
    { id: 9, nome: "Rayanne Puglyesi", id_turma: "3B" },
    { id: 10, nome: "Little Toddy", id_turma: "3B" }
  ]
};

module.exports = database;