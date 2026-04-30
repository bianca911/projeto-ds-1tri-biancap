const db = require('./database.js');

function obterFrequenciaAluno(idAluno) {
    const totalAulas = db.registros.filter(r => r.id_aluno === idAluno).length;
    const presencas = db.registros.filter(r => r.id_aluno === idAluno && r.id_tipo === 1).length;
   
    if (totalAulas === 0) return "0%";
    return ((presencas / totalAulas) * 100).toFixed(0) + "%";
}

// Teste para o Allan (ID 1)
console.log("Frequência do Allan:", obterFrequenciaAluno(1));