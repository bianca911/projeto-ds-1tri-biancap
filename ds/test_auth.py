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
            
            page.screenshot(path="resultado_sucesso.png")
            
            browser.close()

    finally:
        processo.terminate()
        processo.wait()