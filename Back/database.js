const db = {
    alunos: [
        { id: 1, nome: "Allan", id_turma: "A" },
        { id: 2, nome: "Bianca", id_turma: "A" },
        { id: 3, nome: "Giovanna", id_turma: "B" },
        { id: 4, nome: "Maykon", id_turma: "B" }
    ],
    faltas: [
        {id_aluno: 2, data: "2026-04-06", status: "Falta" }
    ],
     professores: [
    { 
        id: 1, 
        nome: "Mateus", 
        materia: "Backend", 
        senha: "123" // Esta é a senha que o teste vai usar [cite: 53]
    }
  ],

  // Estrutura para o UC002 - Consultar alunos por turma [cite: 58, 62]
  turmas: [
    { id: 101, nome: "9º Ano A" },
    { id: 102, nome: "1º Ano B" }
  ],

  // UC002 - Alunos para busca por ordem alfabética [cite: 58, 60]
  alunos: [
    { id: 1, nome: "Allan", id_turma: 101 },
    { id: 2, nome: "Bianca", id_turma: 101 },
    { id: 3, nome: "Giovanna", id_turma: 102 },
    { id: 4, nome: "Maykon", id_turma: 102 }
  ],

  // UC003 - Histórico de faltas e presenças [cite: 68, 70]
  faltas_presencas: [
    { id: 1, id_aluno: 1, data: "2026-04-06", status: "Falta" },
    { id: 2, id_aluno: 2, data: "2026-04-06", status: "Presença" }
  ]
};
module.exports = db;
