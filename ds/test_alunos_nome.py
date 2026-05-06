import os

def test_listar_alunos_alfabetica():
   
    alunos_turma = [
        "Bianca", 
        "Giovanna", 
        "Maykon", 
        "Allan", 
        "Maria Luiza", 
        "Max", 
        "Duda", 
        "Chris", 
        "Miguel", 
        "Saori"
    ]
    
    alunos_ordenados = sorted(alunos_turma)
   
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_alunos_nome_resultado")
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_lista_alunos.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write("Alunos 3A (Ordem Alfabética) \n\n")
        for idx, aluno in enumerate(alunos_ordenados, 1):
            arquivo.write(f"{idx}. {aluno}\n")

    assert len(alunos_ordenados) == 10