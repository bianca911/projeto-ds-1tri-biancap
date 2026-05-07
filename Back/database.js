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
    // Allan Cordeiro (id: 1): 5 faltas, 195 presenças
    ...Array(5).fill({ id_aluno: 1, status: "Falta", id_tipo: 0 }),
    ...Array(195).fill({ id_aluno: 1, status: "Presença", id_tipo: 1 }),

    // Bianca Moreira (id: 2): 12 faltas, 188 presenças
    ...Array(12).fill({ id_aluno: 2, status: "Falta", id_tipo: 0 }),
    ...Array(188).fill({ id_aluno: 2, status: "Presença", id_tipo: 1 }),

    // Christopher Whaither (id: 3): 2 faltas, 198 presenças
    ...Array(2).fill({ id_aluno: 3, status: "Falta", id_tipo: 0 }),
    ...Array(198).fill({ id_aluno: 3, status: "Presença", id_tipo: 1 }),

    // Giovanna Gabrielly (id: 4): 0 faltas, 200 presenças
    ...Array(200).fill({ id_aluno: 4, status: "Presença", id_tipo: 1 }),

    // Maykon da Costa (id: 5): 25 faltas, 175 presenças
    ...Array(167).fill({ id_aluno: 5, status: "Falta", id_tipo: 0 }),
    ...Array(23).fill({ id_aluno: 5, status: "Presença", id_tipo: 1 }),

    // --- TURMA 3B ---
    // Alanzoka Nextage (id: 6): 8 faltas, 192 presenças
    ...Array(8).fill({ id_aluno: 6, status: "Falta", id_tipo: 0 }),
    ...Array(192).fill({ id_aluno: 6, status: "Presença", id_tipo: 1 }),

    // Bit Bolando (id: 7): 10 faltas, 190 presenças
    ...Array(10).fill({ id_aluno: 7, status: "Falta", id_tipo: 0 }),
    ...Array(190).fill({ id_aluno: 7, status: "Presença", id_tipo: 1 }),

    // Cap Capuccino (id: 8): 3 faltas, 197 presenças
    ...Array(3).fill({ id_aluno: 8, status: "Falta", id_tipo: 0 }),
    ...Array(197).fill({ id_aluno: 8, status: "Presença", id_tipo: 1 }),

    // Dino Dad (id: 9): 15 faltas, 185 presenças
    ...Array(15).fill({ id_aluno: 9, status: "Falta", id_tipo: 0 }),
    ...Array(185).fill({ id_aluno: 9, status: "Presença", id_tipo: 1 }),

    // Calango Calanguinho (id: 10): 7 faltas, 193 presenças
    ...Array(7).fill({ id_aluno: 10, status: "Falta", id_tipo: 0 }),
    ...Array(193).fill({ id_aluno: 10, status: "Presença", id_tipo: 1 }),

    // --- TURMA 3C ---
    // Ana Paula Renault (id: 11): 4 faltas, 196 presenças
    ...Array(4).fill({ id_aluno: 11, status: "Falta", id_tipo: 0 }),
    ...Array(196).fill({ id_aluno: 11, status: "Presença", id_tipo: 1 }),

    // Bob God God (id: 12): 6 faltas, 194 presenças
    ...Array(6).fill({ id_aluno: 12, status: "Falta", id_tipo: 0 }),
    ...Array(194).fill({ id_aluno: 12, status: "Presença", id_tipo: 1 }),

    // Claudio Mario (id: 13): 22 faltas, 178 presenças
    ...Array(22).fill({ id_aluno: 13, status: "Falta", id_tipo: 0 }),
    ...Array(178).fill({ id_aluno: 13, status: "Presença", id_tipo: 1 }),

    // Dilma Ruself (id: 14): 20 faltas, 180 presenças
    ...Array(20).fill({ id_aluno: 14, status: "Falta", id_tipo: 0 }),
    ...Array(180).fill({ id_aluno: 14, status: "Presença", id_tipo: 1 }),

    // Babu Messias (id: 15): 1 falta, 199 presenças
    ...Array(1).fill({ id_aluno: 15, status: "Falta", id_tipo: 0 }),
    ...Array(199).fill({ id_aluno: 15, status: "Presença", id_tipo: 1 }),

    // --- TURMA 3D ---
    // Anais Fundos (id: 16): 0 faltas, 200 presenças
    ...Array(200).fill({ id_aluno: 16, status: "Presença", id_tipo: 1 }),

    // Byoncé Medeiros (id: 17): 9 faltas, 191 presenças
    ...Array(9).fill({ id_aluno: 17, status: "Falta", id_tipo: 0 }),
    ...Array(191).fill({ id_aluno: 17, status: "Presença", id_tipo: 1 }),

    // Clarisse Lispector (id: 18): 11 faltas, 189 presenças
    ...Array(11).fill({ id_aluno: 18, status: "Falta", id_tipo: 0 }),
    ...Array(189).fill({ id_aluno: 18, status: "Presença", id_tipo: 1 }),

    // Diana Princess (id: 19): 5 faltas, 195 presenças
    ...Array(5).fill({ id_aluno: 19, status: "Falta", id_tipo: 0 }),
    ...Array(195).fill({ id_aluno: 19, status: "Presença", id_tipo: 1 }),

    // Carpinteira Sabrina (id: 20): 14 faltas, 186 presenças
    ...Array(14).fill({ id_aluno: 20, status: "Falta", id_tipo: 0 }),
    ...Array(186).fill({ id_aluno: 20, status: "Presença", id_tipo: 1 }),
  ]
};

module.exports = database;