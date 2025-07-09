# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas

- **Frontend (web):**
  - React
  - TypeScript
  - Vite
  - React Router DOM

- **Backend (server):**
  - Node.js
  - TypeScript
  - Express
  - Drizzle ORM
  - SQLite
  - Docker (para ambiente de banco de dados)

## Padrões de Projeto
- Estrutura de pastas separando frontend (`web/`) e backend (`server/`).
- Utilização de rotas REST no backend.
- Componentização no frontend com React.
- Variáveis de ambiente para configuração.

## Setup e Configuração

### Pré-requisitos
- Node.js (versão recomendada: 18+)
- Docker (opcional, para rodar o banco de dados via container)

### Instalação

1. Clone o repositório:
   ```sh
   git clone <url-do-repositorio>
   cd NLW-agents
   ```

2. Instale as dependências do frontend e backend:
   ```sh
   cd web
   npm install
   cd ../server
   npm install
   ```

3. (Opcional) Suba o banco de dados com Docker:
   ```sh
   cd server
   docker-compose up -d
   ```

4. Inicie o backend:
   ```sh
   cd server
   npm run dev
   ```

5. Inicie o frontend:
   ```sh
   cd web
   npm run dev
   ```

Acesse a aplicação web em `http://localhost:5173`.

---

Projeto desenvolvido durante o NLW da Rocketseat.