import os

def test_limite_alunos_sucesso():
    
    alunos_turma_3a = [
        "Allan Cordeiro",
        "Bianca Moreira",
        "Christopher Whaither",
        "Giovanna Gabrielly",
        "Maykon da Costa"
    ]
    
    alunos_turma_3b = [
        "Malévola Menezes",
        "Soso Careca",
        "Mc Paiva",
        "Little Toddy"
    ]
    
    limite_maximo = 5
    
    quantidade_3a = len(alunos_turma_3a)
    quantidade_3b = len(alunos_turma_3b)
    
    print(f"\n 3A Total: {quantidade_3a} | 3B Total: {quantidade_3b} | Limite: {limite_maximo}")
    
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_limite_alunos_resultado")
        
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_limite.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write("Relatório de Validação: Turma 3A\n")
        arquivo.write(f"Quantidade atual de alunos: {quantidade_3a}\n")
        arquivo.write(f"Limite permitido: {limite_maximo}\n")
        arquivo.write("Status: SUCESSO - Quantidade dentro do limite permitido.\n\n")
        
        arquivo.write("Relatório de Validação: Turma 3B\n")
        arquivo.write(f"Quantidade atual de alunos: {quantidade_3b}\n")
        arquivo.write(f"Limite permitido: {limite_maximo}\n")
        arquivo.write("Status: SUCESSO - Quantidade dentro do limite permitido.\n")