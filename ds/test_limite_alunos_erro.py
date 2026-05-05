import os

def test_limite_alunos_erro():
    
    alunos_turma_3a = [
        "Allan Cordeiro",
        "Bianca Moreira",
        "Christopher Whaither",
        "Giovanna Gabrielly",
        "Maykon da Costa",
        "Bianca Amorim", 
        "Maria Luiza", 
        "Kamilly Lacerda"
    ]

    alunos_turma_3b = [
        "Malévola Menezes",
        "Soso Careca",
        "Mc Paiva",
        "Little Toddy",
        "Edu Backs", 
        "Liz Macedo", 
        "Rayanne Puglyesi"
    ]
    
    limite_maximo = 5
    
    quantidade_3a = len(alunos_turma_3a)
    quantidade_3b = len(alunos_turma_3b)
    
    print(f"\nTotal: {quantidade_3a} | 3B Total: {quantidade_3b} | Limite: {limite_maximo}")
    
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_limite_alunos_erro_resultado")
        
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_limite_erro.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        
        if quantidade_3a > limite_maximo:
            arquivo.write("Relatório de Erro: Turma 3A\n")
            arquivo.write(f"Quantidade atual de alunos: {quantidade_3a}\n")
            arquivo.write(f"Limite permitido: {limite_maximo}\n")
            arquivo.write("Status: ERRO - A quantidade de alunos excedeu o limite permitido.\n\n")
        
        if quantidade_3b > limite_maximo:
            arquivo.write("Relatório de Erro: Turma 3B\n")
            arquivo.write(f"Quantidade atual de alunos: {quantidade_3b}\n")
            arquivo.write(f"Limite permitido: {limite_maximo}\n")
            arquivo.write("Status: ERRO - A quantidade de alunos excedeu o limite permitido.\n")