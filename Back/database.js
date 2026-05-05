const database = {
  professor_logado: {
    nome: "Prof. Mateus",
    materia: "Tecnologia Da Informação"
  },

  // Lista única contendo alunos de ambas as turmas
  alunos: [
    { id: 1, nome: "Allan Cordeiro", id_turma: "3A" },
    { id: 2, nome: "Bianca Moreira", id_turma: "3A" },
    { id: 3, nome: "Christopher Whaither", id_turma: "3A" },
    { id: 4, nome: "Giovanna Gabrielly", id_turma: "3A" },
    { id: 5, nome: "Maykon da Costa", id_turma: "3A" },
    { id: 6, nome: "Malévola Menezes", id_turma: "3B" },
    { id: 7, nome: "Soso Careca", id_turma: "3B" },
    { id: 8, nome: "Mc Paiva", id_turma: "3B" },
    { id: 9, nome: "Rayanne Puglyesi", id_turma: "3B" },
    { id: 10, nome: "Dittle Toddy", id_turma: "3B" }
  ],

  registros: [
    { id_aluno: 1, data: "2026-04-27", status: "Presença", id_tipo: 1 },
    { id_aluno: 1, data: "2026-04-28", status: "Falta", id_tipo: 0 },
    { id_aluno: 3, data: "2026-04-27", status: "Presença", id_tipo: 1 },
    { id_aluno: 3, data: "2026-04-28", status: "Presença", id_tipo: 1 }
  ]
};

module.exports = database;