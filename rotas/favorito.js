const {Router} = require('express');
const { getLivrosFavoritos, postLivroFavorito, deleteLivroFavorito } = require('../controladores/favorito');
const router = Router();

router.get('/', getLivrosFavoritos); //Busca todos os livros Favoritos

router.post('/:id', postLivroFavorito);

router.delete('/:id', deleteLivroFavorito); 


module.exports = router;