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

    { id: 6, nome: "Alanzoka Nextage", id_turma: "3B" },
    { id: 7, nome: "Bit Bolando ", id_turma: "3B" },
    { id: 8, nome: "Cap Capuccino", id_turma: "3B" },
    { id: 9, nome: "Dino Dad", id_turma: "3B" },
    { id: 10, nome: "Calango Calanguinho", id_turma: "3B" },

    { id: 11, nome: "Ana Paula Renault", id_turma: "3C" },
    { id: 12, nome: "Bob God God", id_turma: "3C" },
    { id: 13, nome: "Claudio Mario", id_turma: "3C" },
    { id: 14, nome: "Dilma Ruself", id_turma: "3C" },
    { id: 15, nome: "Babu Messias", id_turma: "3C" },

    { id: 16, nome: "Anais Fundos", id_turma: "3D" },
    { id: 17, nome: "Byoncé Medeiros", id_turma: "3D" },
    { id: 18, nome: "Clarisse Lispector", id_turma: "3D" },
    { id: 19, nome: "Diana Princess", id_turma: "3D" },
    { id: 20, nome: "Carpinteira Sabrina", id_turma: "3D" }

  ],

  registros: [
      { id_aluno: 1, status: "Presença", id_tipo: 1 },
    { id_aluno: 1, status: "Falta", id_tipo: 0 },
    { id_aluno: 3, status: "Presença", id_tipo: 1 },
    { id_aluno: 3, status: "Presença", id_tipo: 1 },
   
    // Novos registros de faltas/presenças para os outros alunos
    { id_aluno: 6, status: "Falta", id_tipo: 0 },
    { id_aluno: 6, status: "Presença", id_tipo: 1 },
    { id_aluno: 7, status: "Falta", id_tipo: 0 },
    { id_aluno: 7, status: "Presença", id_tipo: 1 },
    { id_aluno: 8, status: "Falta", id_tipo: 0 },
    { id_aluno: 9, status: "Falta", id_tipo: 0 },
    { id_aluno: 10, status: "Presença", id_tipo: 1 },
    { id_aluno: 11, status: "Falta", id_tipo: 0 },
    { id_aluno: 12, status: "Presença", id_tipo: 1 },
    { id_aluno: 16, status: "Falta", id_tipo: 0 }
  ]
};

module.exports = database;