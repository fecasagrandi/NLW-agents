# 🚀 NLW Agents
<img width="686" height="386" alt="image" src="https://github.com/user-attachments/assets/1381d806-d121-408d-80d8-7fa84e708dd7" />

Este projeto foi desenvolvido durante o evento **Next Level Week (NLW)** da [Rocketseat](https://rocketseat.com.br/).

---

## 🧰 Tecnologias e Bibliotecas Utilizadas

### 🖥️ Frontend (`web/`)
- React
- TypeScript
- Vite
- React Router DOM

### 🛠️ Backend (`server/`)
- Node.js
- TypeScript
- Express
- Drizzle ORM
- SQLite
- Docker *(opcional para ambiente de banco de dados)*

---

## 🧱 Padrões de Projeto

- Estrutura de pastas separando frontend (`web/`) e backend (`server/`)
- Utilização de rotas REST no backend
- Componentização no frontend com React
- Variáveis de ambiente (`.env`) para configuração

---

## ⚙️ Setup e Configuração

### ✅ Pré-requisitos
- Node.js `18+`
- Docker *(opcional, para rodar o banco via container)*

### 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/fecasagrandi/NLW-agents.git
cd NLW-agents

# Instale as dependências do frontend
cd web
npm install

# Instale as dependências do backend
cd ../server
npm install

# (Opcional) Suba o banco de dados com Docker
docker-compose up -d

# Inicie o backend
npm run dev

# Inicie o frontend
cd ../web
npm run dev

Acesse a aplicação web em `http://localhost:5173`.

---

Projeto desenvolvido durante o NLW da Rocketseat.
