require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const { db } = require('./firebaseAdmin');

// Importando as rotas
const rotaLivro = require('./rotas/livro');
const rotaLivroFavorito = require('./rotas/favorito');
const rotaCategoria = require('./rotas/categoria');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' })); // Habilita o CORS para todas as origens

// Registrando as rotas
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaLivroFavorito);
app.use('/categorias', rotaCategoria);

// Para testes locais
if (!process.env.NETLIFY) {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando localmente na porta ${PORT}`);
    });
}

// Exporta o app para o Netlify
module.exports.handler = serverless(app);
