const express = require('express');
const cors = require('cors');

// Importando as rotas
const rotaLivro = require('./rotas/livro');
const rotaLivroFavorito = require('./rotas/favorito');
const rotaCategoria = require('./rotas/categoria');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

// Registrando as rotas
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaLivroFavorito);
app.use('/categorias', rotaCategoria);

// Porta para testes locais
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor rodando localmente na porta ${PORT}`);
});
