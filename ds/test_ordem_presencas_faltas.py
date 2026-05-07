import os

def test_ordem_faltas_presencas():
    
    alunos = [
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
    
    ordem_presencas = sorted(alunos, key=lambda x: x["presencas"], reverse=True)
    ordem_faltas = sorted(alunos, key=lambda x: x["faltas"], reverse=True)
    
    diretorio = os.path.dirname(os.path.abspath(__file__))
    pasta = os.path.join(diretorio, "test_ordem_presenças_faltas_resultado")
    caminho = os.path.join(pasta, "resultado_ordem.txt")
    

    with open(caminho, "w", encoding="utf-8") as f:
        f.write("RANKING DE PRESENÇAS \n\n")
        for a in ordem_presencas:
            f.write(f"{a['nome']} ({a['turma']}) - Presenças: {a['presencas']}\n")
            
        f.write("\nRANKING DE FALTAS \n\n")
        for a in ordem_faltas:
            f.write(f"{a['nome']} ({a['turma']}) - Faltas: {a['faltas']}\n")

    assert len(alunos) == 20