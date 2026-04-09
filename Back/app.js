const express = require('express');
const app = express();
app.use(express.json());

// 1. O Banco de Dados Mokado (Conforme as entidades: Professor e Alunos) [cite: 13, 18]
const db = {
    professores: [
        { id: 1, nome: "Mateus", materia: "Backend", senha: "123" }
    ],
    alunos: [
        { id: 1, nome: "Allan", id_turma: "1A" },
        { id: 2, nome: "Bianca", id_turma: "1A" },
        { id: 3, nome: "Giovanna", id_turma: "1B" },
        { id: 4, nome: "Maykon", id_turma: "1B" }
    ]
};

// --- NOVAS ROTAS ADICIONADAS ABAIXO ---

// Rota de Status (Resolve o erro 404 do seu teste!)
// Valida a Regra de Negócio: Limite de uso no horário escolar [cite: 26, 55]
app.get('/status-sistema', (req, res) => {
    const agora = new Date();
    const horaAtual = agora.getHours();

    // Verifica se está entre 07:00 e 18:00 
    if (horaAtual >= 7 && horaAtual < 18) {
        res.status(200).json({ 
            acesso_permitido: true,
            mensagem: "Sistema operando dentro do horário escolar." 
        });
    } else {
        res.status(403).json({ 
            acesso_permitido: false, 
            mensagem: "Sistema fora do horário de funcionamento (07h às 18h)." 
        });
    }
});

// Rota de Login (UC001 - Autenticar o Acesso) [cite: 47, 54]
app.post('/login', (req, res) => {
    const { nome, senha } = req.body;
    
    const professor = db.professores.find(p => p.nome === nome && p.senha === senha);

    if (professor) {
        res.status(200).json({
            mensagem: "Acesso liberado",
            auth: true,
            perfil: "Professor",
            professor: professor.nome
        });
    } else {
        res.status(401).json({ 
            auth: false, 
            erro: "Credenciais inválidas ou sem perfil de Professor." 
        });
    }
});

// Rota para listar alunos (Para o seu test_api.py)
app.get('/alunos', (req, res) => {
    res.status(200).json(db.alunos);
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});