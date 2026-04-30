from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)


PROFESSOR_CREDENCIAL = "12345"

class LoginRequest(BaseModel):
    credencial: str

@app.post("/login")
async def autenticar(dados: LoginRequest):
    # Regra: Acesso apenas se a credencial for idêntica à do professor
    if dados.credencial == PROFESSOR_CREDENCIAL:
        return {"status": "sucesso", "usuario": "Professor"}
    raise HTTPException(status_code=401, detail="Credencial inválida")