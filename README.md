# Nome da Aplicação

  Anfitriões de aluguel, desafio técnico. 
  Listagem, busca e detalhes sobre aluguel de acomodações.

## Tecnologias Utilizadas

- **Backend**: Python, Flask,
- **Frontend**: React
- **Banco de Dados**: SQLite
- **Outras Dependências**: SQLAlchemy, python-dotenv- flask-cors

## Pré-requisitos

Antes de rodar o projeto, você precisa garantir que as seguintes ferramentas estejam instaladas no seu ambiente:

- [Python 3.10](https://www.python.org/downloads/)
- [Node.js e npm](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Instalação

### Backend (API com Flask)

1. Clone o repositório:

    ```bash
    git clone https://github.com/RodrigoLuigi/anfitrioes_de_aluguel.git
    cd anfitrioes_de_aluguel/api

2. Crie um ambiente virtual:

    ```bash
    python3 -m venv venv
    ```

3. Ative o ambiente virtual:
   - No Windows:
     ```bash
     venv\Scripts\activate
     ```
   - No MacOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Instale as dependências do backend:

    ```bash
    pip install -r requirements.txt
    ```

5. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com a variável `DATABASE_URL` apontando para seu banco de dados.
   - Exemplo de conteúdo do `.env`:
     ```bash
     DATABASE_URL=sqlite:///./database.db  # Ou o URL do seu banco de dados
     ```

6. Rodar as migrações do banco de dados (se necessário):

    ```bash
    flask db upgrade
    ```

7. Inicie o servidor:

    ```bash
    flask run #Servidor irá inicializar em http://localhost:5000
    ```

### Frontend (React)

1. Navegue até a pasta do frontend (caso não esteja nela):

    ```bash
    cd anfitrioes_de_aluguel/web
    ```

2. Instale as dependências do frontend:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev #Servidor irá inicializar em http://localhost:5173
    ```

4. Abra o navegador e acesse `http://localhost:5173` para visualizar o frontend.

## Endpoints da API

Aqui você pode documentar os endpoints da API que seu backend Flask oferece. Um exemplo:

- **GET** `/acomodacoes` - Lista todas as acomodações.
- **POST** `/acomodacoes` - Cria uma nova acomodação.
- **GET** `/acomodacoes/{id}` - Exibe detalhes de uma acomodação.
- **GET** `/acomodacoes/busca?locale={search}` - Lista acomodações pelo termo de busca (Localização)

