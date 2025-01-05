const express = require('express');
const serverless = require('serverless-http');
const {
  getLivrosFavoritos,
  postLivroFavorito,
  deleteLivroFavorito,
} = require('../controladores/favorito');

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/', getLivrosFavoritos); // Busca todos os livros favoritos
router.post('/:id', postLivroFavorito); // Adiciona um livro aos favoritos
router.delete('/:id', deleteLivroFavorito); // Remove um livro dos favoritos

app.use('/.netlify/functions/favoritos', router);

// Exporta como função serverless
module.exports.handler = serverless(app);
