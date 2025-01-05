const express = require('express');
const rotaLivro = require('./rotas/livro');
const rotaLivroFavorito = require('./rotas/favorito');
const rotaCategoria = require('./rotas/categoria');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));
const port = 8000;
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaLivroFavorito);
app.use('/categorias',rotaCategoria);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})