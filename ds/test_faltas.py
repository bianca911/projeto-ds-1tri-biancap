import os

def test_analise_alunos_com_muitas_faltas():
    # 1. Entrada: Lista com alunos, turmas, faltas e presenças (somando 200 para cada um)
    todos_os_alunos = [
        {"nome": "Allan Cordeiro", "turma": "3A", "faltas": 5, "presencas": 195},
        {"nome": "Bianca Moreira", "turma": "3A", "faltas": 12, "presencas": 188},
        {"nome": "Christopher Whaither", "turma": "3A", "faltas": 2, "presencas": 198},
        {"nome": "Giovanna Gabrielly", "turma": "3A", "faltas": 0, "presencas": 200},
        {"nome": "Maykon da Costa", "turma": "3A", "faltas": 25, "presencas": 175},
        
        {"nome": "Alanzoka Nextage", "turma": "3B", "faltas": 8, "presencas": 192},
        {"nome": "Bit Bolando", "turma": "3B", "faltas": 10, "presencas": 190},
        {"nome": "Cap Capuccino", "turma": "3B", "faltas": 3, "presencas": 197},
        {"nome": "Dino Dad", "turma": "3B", "faltas": 15, "presencas": 185},
        {"nome": "Calango Calanguinho", "turma": "3B", "faltas": 7, "presencas": 193},
        
        {"nome": "Ana Paula Renault", "turma": "3C", "faltas": 4, "presencas": 196},
        {"nome": "Bob God God", "turma": "3C", "faltas": 6, "presencas": 194},
        {"nome": "Claudio Mario", "turma": "3C", "faltas": 22, "presencas": 178},
        {"nome": "Dilma Ruself", "turma": "3C", "faltas": 20, "presencas": 180},
        {"nome": "Babu Messias", "turma": "3C", "faltas": 1, "presencas": 199},
        
        {"nome": "Anais Fundos", "turma": "3D", "faltas": 0, "presencas": 200},
        {"nome": "Byoncé Medeiros", "turma": "3D", "faltas": 9, "presencas": 191},
        {"nome": "Clarisse Lispector", "turma": "3D", "faltas": 11, "presencas": 189},
        {"nome": "Diana Princess", "turma": "3D", "faltas": 5, "presencas": 195},
        {"nome": "Carpinteira Sabrina", "turma": "3D", "faltas": 14, "presencas": 186}
    ]
    
    alunos_acima_limite = [
        aluno for aluno in todos_os_alunos if aluno["faltas"] >= 20
    ]
    
    
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_analise_faltas_resultado")
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_analise_faltas.txt")
    
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write("Relatório: Alunos com faltas acima ou igual a 20\n\n")
        
        for idx, aluno in enumerate(alunos_acima_limite, 1):
            arquivo.write(f"{idx}. Nome: {aluno['nome']} | Turma: {aluno['turma']}\n")
            arquivo.write(f"   Faltas: {aluno['faltas']} | Presenças: {aluno['presencas']}\n\n")
        
    assert len(alunos_acima_limite) > 0, "Erro: Nenhum aluno encontrado com 20 ou mais faltas."