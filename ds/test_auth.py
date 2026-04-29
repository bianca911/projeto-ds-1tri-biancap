import os
import subprocess
import time
import httpx
import pytest


subprocess.Popen(["uvicorn", "main:app", "--port", "8081"], cwd="../Back")


time.sleep(2)

URL_ALVO = "http://0.0.0.0:8081/login"


def test_autenticacao_professor():
    dados_sucesso = {"credencial": "12345"}
    with httpx.Client() as client:
        response = client.post(URL_ALVO, json=dados_sucesso)

    assert response.status_code == 200
    assert response.json()["status"] == "sucesso"
    assert response.json()["usuario"] == "Professor"


def test_credencial_errada():
    """Valida se o servidor bloqueia o acesso com 401 para senhas incorretas."""


dados_erro = {"credencial": "99999"}

with httpx.Client() as client:
    response = client.post(URL_ALVO, json=dados_erro)

# O seu main.py levanta um HTTPException 401
assert response.status_code == 401
