import requests 

BASE_URL = "http://localhost:3000"

def test_login_professor_sucesso():
    payload = {
        "nome": "Mateus",
        "senha": "123"
    }
    response = requests.post(f"{BASE_URL}/login", json=payload)
    assert response.status_code == 200
    assert response.json()["perfil"] == "Professor"

def test_verificar_horario_funcionamento():
    response = requests.get(f"{BASE_URL}/status-sistema")
    assert response.status_code == 200
    assert response.json()["acesso_permitido"] is True
     