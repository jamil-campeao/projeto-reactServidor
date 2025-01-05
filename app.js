const express = require('express');
const cors = require('cors');

const rotaLivro = require('./rotas/livro');
const rotaLivroFavorito = require('./rotas/favorito');
const rotaCategoria = require('./rotas/categoria');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Rotas
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaLivroFavorito);
app.use('/categorias', rotaCategoria);

// Porta dinâmica para ambientes como Netlify, com fallback para 8000
const PORT = process.env.PORT || 8000;

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
