const express = require('express');
const serverless = require('serverless-http');
const {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
} = require('../controladores/livro');

const app = express();
app.use(express.json());

// Rotas
app.get('/livros', getLivros); // Busca todos os livros
app.get('/livros/:id', getLivro); // Busca o livro por ID
app.post('/livros', postLivro); // Adiciona um novo livro
app.patch('/livros/:id', patchLivro); // Atualiza parcialmente um livro
app.delete('/livros/:id', deleteLivro); // Remove um livro

// Exporta como função serverless
module.exports.handler = serverless(app);
