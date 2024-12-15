const {Router} = require('express');
const{getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require('../controladores/livro');
const router = Router();

router.get('/', getLivros); //Busca todos os livros
router.get('/:id', getLivro); // Busca o livro por ID, devolvendo somente um resultado

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro); 


module.exports = router;