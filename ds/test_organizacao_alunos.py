import os

def test_organizacao_alfabetica_alunos():
    
    todos_os_alunos = [
        {"nome": "Allan Cordeiro", "turma": "3A"},
        {"nome": "Bianca Moreira", "turma": "3A"},
        {"nome": "Christopher Whaither", "turma": "3A"},
        {"nome": "Giovanna Gabrielly", "turma": "3A"},
        {"nome": "Maykon da Costa", "turma": "3A"},
        {"nome": "Bianca Amorim", "turma": "3A"},
        {"nome": "Maria Luiza", "turma": "3A"},
        {"nome": "Kamilly Lacerda", "turma": "3A"},
        {"nome": "Alanzoka Nextage", "turma": "3B"},
        {"nome": "Bit Bolando", "turma": "3B"},
        {"nome": "Cap Capuccino", "turma": "3B"},
        {"nome": "Dino Dad", "turma": "3B"},
        {"nome": "Calango Calanguinho", "turma": "3B"},
        {"nome": "Ana Paula Renault", "turma": "3C"},
        {"nome": "Bob God God", "turma": "3C"},
        {"nome": "Claudio Mario", "turma": "3C"},
        {"nome": "Dilma Ruself", "turma": "3C"},
        {"nome": "Babu Messias", "turma": "3C"},
        {"nome": "Anais Fundos", "turma": "3D"},
        {"nome": "Byoncé Medeiros", "turma": "3D"},
        {"nome": "Clarisse Lispector", "turma": "3D"},
        {"nome": "Diana Princess", "turma": "3D"},
        {"nome": "Carpinteira Sabrina", "turma": "3D"}
    ]
    
    alunos_ordenados = sorted(todos_os_alunos, key=lambda x: x["nome"])
    
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_organizacao_alunos_resultado")
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_organizacao.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write(" Relatório de todos os alunos do sistema: Organização Alfabética \n\n")
        
        for idx, aluno in enumerate(alunos_ordenados, 1):
            arquivo.write(f"{idx}. {aluno['nome']} (Turma: {aluno['turma']})\n")
    