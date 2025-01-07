# Servidor - Helter Books

Servidor de requisições do projeto [Helter Books](https://github.com/jamil-campeao/ReactProject). Este backend é responsável por gerenciar as operações de leitura, criação e exclusão de livros, favoritos e categorias, utilizando o Firebase como banco de dados.

---

## Licença

Este projeto está licenciado sob a [MIT License](https://github.com/jamil-campeao/projeto-reactServidor/blob/main/LICENSE).

---

## Funcionalidades

O servidor foi projetado para atender às seguintes funcionalidades:

### 1. **Gerenciamento de Livros**
- Listar todos os livros disponíveis.
- Buscar livros por ID.
- Inserir novos livros.
- Atualizar informações de livros existentes.
- Deletar livros do banco de dados.

### 2. **Gerenciamento de Favoritos**
- Listar todos os livros adicionados à lista de favoritos.
- Adicionar livros à lista de favoritos pelo ID.
- Remover livros da lista de favoritos pelo ID.

### 3. **Gerenciamento de Categorias**
- Listar todas as categorias de livros.

---

## Endpoints e Como Usar

### **Base URL**
- Todas as requisições devem usar a URL base: https://helterbooksserver.netlify.app/.netlify/functions


### **Endpoints**

#### **1. Livros**
- **`GET /livros`**
- Retorna todos os livros.
- Exemplo no Postman:
  - Método: `GET`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/livros`

- **`GET /livros/:id`**
- Retorna um livro específico pelo ID.
- Exemplo no Postman:
  - Método: `GET`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/livros/1`
  - Substitua `1` pelo ID do livro desejado.

- **`POST /livros`**
- Adiciona um novo livro.
- Exemplo no Postman:
  - Método: `POST`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/livros`
  - Corpo (JSON):
    ```json
    {
      "id": "1",
      "nome": "O Senhor dos Anéis",
      "autor": "J.R.R. Tolkien"
    }
    ```

- **`PATCH /livros/:id`**
- Atualiza um livro pelo ID.
- Exemplo no Postman:
  - Método: `PATCH`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/livros/1`
  - Corpo (JSON):
    ```json
    {
      "nome": "O Hobbit"
    }
    ```

- **`DELETE /livros/:id`**
- Remove um livro pelo ID.
- Exemplo no Postman:
  - Método: `DELETE`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/livros/1`

#### **2. Favoritos**
- **`GET /favoritos`**
- Retorna todos os livros favoritos.
- Exemplo no Postman:
  - Método: `GET`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/favoritos`

- **`POST /favoritos/:id`**
- Adiciona um livro aos favoritos pelo ID.
- Exemplo no Postman:
  - Método: `POST`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/favoritos/1`

- **`DELETE /favoritos/:id`**
- Remove um livro dos favoritos pelo ID.
- Exemplo no Postman:
  - Método: `DELETE`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/favoritos/1`

#### **3. Categorias**
- **`GET /categorias`**
- Retorna todas as categorias de livros.
- Exemplo no Postman:
  - Método: `GET`
  - URL: `https://helterbooksserver.netlify.app/.netlify/functions/categorias`

---

## Tecnologias Utilizadas

- **Linguagem:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** Firebase Firestore
- **Hospedagem:** Netlify Functions (serverless)

---

## Estrutura do Repositório

- **`/functions`**: Contém as funções serverless exportadas para o Netlify.
- **`/controladores`**: Lógica para manipulação de dados das rotas.
- **`/servicos`**: Comunicação com o Firebase Firestore.
- **`firebaseAdmin.js`**: Configuração do Firebase Admin SDK.

---

## Autor

- **Desenvolvido por:** [Jamil Luiz Campeão](https://github.com/jamil-campeao)
- **LinkedIn:** [Jamil Campeão](https://www.linkedin.com/in/jamilcampeao/)

