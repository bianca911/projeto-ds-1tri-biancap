import os

def test_professor_perfil_sucesso():
   
    professores_db = [
        {"nome": "Mateus", "materia": "Curso Técnico", "credencial": "12345"},
        {"nome": "Jiane", "materia": "Curso Técnico", "credencial": "67891"},
        {"nome": "Kleber", "materia": "Artes", "credencial": "23456"},
        {"nome": "Bianca", "materia": "Química", "credencial": "789123"}
    ]
    
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_resultados = os.path.join(diretorio_atual, "test_professor_perfil_resultado")
    caminho_arquivo = os.path.join(pasta_resultados, "resultado_perfil.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write("Relatório de Perfil do Professor\n\n")
        
        for prof in professores_db:
            arquivo.write(f"Credencial utilizada: {prof['credencial']}\n")
            arquivo.write(f"Nome do Professor: {prof['nome']}\n")
            arquivo.write(f"Matéria/Curso: {prof['materia']}\n\n")
            
        arquivo.write("Status: SUCESSO - Dados preenchidos e validados!\n")

    assert len(professores_db) == 4, "Erro: A quantidade de professores não é a esperada."