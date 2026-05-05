import os
from datetime import datetime

def test_verificar_horario_agora():
    
    hora_atual = datetime.now().time()
    
    hora_inicio = datetime.strptime("07:15", "%H:%M").time()
    hora_fim = datetime.strptime("12:25", "%H:%M").time()
    
    print(f"\n{hora_atual.strftime('%H:%M:%S')}")
    
    if hora_inicio <= hora_atual <= hora_fim:
        resultado = "SUCESSO: Acesso permitido dentro do horário escolar!"
        print(f"{resultado}")
        acesso_permitido = True
        
    else:
        resultado = "ERRO: Acesso negado. Fora do horário de funcionamento!"
        print(f"{resultado}")
        acesso_permitido = False
        
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    pasta_prints = os.path.join(diretorio_atual, "test_horario_resultado")
        
    caminho_arquivo = os.path.join(pasta_prints, "resultado_horario.txt")
    
    with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write(f"Hora do teste: {hora_atual.strftime('%H:%M:%S')}\n")
        arquivo.write(f"Status: {resultado}\n")
