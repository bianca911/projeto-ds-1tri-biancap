import subprocess
import time
import httpx
import os
from playwright.sync_api import sync_playwright

URL_ALVO = "http://127.0.0.1:8081/login"

def test_acesso_professor_valido():
    caminho_back = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "Back"))
    
    processo = subprocess.Popen(
        ["python", "-m", "uvicorn", "main:app", "--port", "8081"],
        cwd=caminho_back
    )
    
    time.sleep(3)

    try:
        dados_sucesso = {"credencial": "12345"}
        
        with httpx.Client() as client:
            response = client.post(URL_ALVO, json=dados_sucesso)
        
        assert response.status_code == 200
        resposta_json = response.json()
        assert resposta_json["status"] == "sucesso"
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            
            page.route("**/login", lambda route: route.fulfill(
                status=200,
                body='{"status": "sucesso", "usuario": "Professor"}'
            ))
            
            page.goto(URL_ALVO)
            
            diretorio_atual = os.path.dirname(os.path.abspath(__file__))
            pasta_prints = os.path.join(diretorio_atual, "test_auth_img")
            
            arquivos_existentes = os.listdir(pasta_prints)
            
            numero_atual = 0
            for i in range(1, 6):
                if f"resultado_sucesso{i}.png" in arquivos_existentes:
                    numero_atual = i
            
            proximo_numero = numero_atual + 1
            if proximo_numero > 5:
                proximo_numero = 1
                
            nome_arquivo = f"resultado_sucesso{proximo_numero}.png"
            caminho_completo = os.path.join(pasta_prints, nome_arquivo)
            
            page.screenshot(path=caminho_completo)
            
            browser.close()

    finally:
        processo.terminate()
        processo.wait()