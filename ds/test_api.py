import requests 

BASE_URL = "http://localhost:3000"

def test_verificar_alunos():
    response = requests.get(f"{BASE_URL}/alunos")
    assert response.status_code == 200
