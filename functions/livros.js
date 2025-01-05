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
app.use(cors({ origin: '*' }));

// Prefixo necessário para Netlify Functions
const router = express.Router();

router.get('/', getLivros); // Busca todos os livros
router.get('/:id', getLivro); // Busca livro por ID
router.post('/', postLivro); // Adiciona livro
router.patch('/:id', patchLivro); // Atualiza livro por ID
router.delete('/:id', deleteLivro); // Remove livro por ID

app.use('/.netlify/functions/livros', router);

module.exports.handler = serverless(app);
