import os

def test_verificar_turmas_professor():
    
    professor = "Mateus"
    turmas_professor = ["3A", "3B", "3C", "3D"] 
    quantidade_turmas = len(turmas_professor) 
    
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_turmas_professor_resultado")
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_turmas.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write(f"Relatório do Professor {professor} \n\n")
        arquivo.write(f"Total de turmas cadastradas: {quantidade_turmas} \n\n")
        arquivo.write("Turmas do professor:\n")
        for turma in turmas_professor:
            arquivo.write(f"- {turma}\n")
    
    assert quantidade_turmas >= 5, "Erro: O professor deve possuir somente 4 turmas."