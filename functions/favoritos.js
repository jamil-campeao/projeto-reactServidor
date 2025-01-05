const express = require('express');
const serverless = require('serverless-http');
const {
  getLivrosFavoritos,
  postLivroFavorito,
  deleteLivroFavorito,
} = require('../controladores/favorito');

const app = express();
app.use(express.json());

// Rotas
app.get('/favoritos', getLivrosFavoritos); // Busca todos os livros favoritos
app.post('/favoritos/:id', postLivroFavorito); // Adiciona um livro aos favoritos
app.delete('/favoritos/:id', deleteLivroFavorito); // Remove um livro dos favoritos

// Exporta como função serverless
module.exports.handler = serverless(app);
