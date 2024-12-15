const {Router} = require('express');
const{getLivros, getLivro} = require('../controladores/livro');
const router = Router();

router.get('/', getLivros); //Busca todos os livros
router.get('/:id', getLivro); // Busca o livro por ID, devolvendo somente um resultado

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST')
});

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH')
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
});


module.exports = router;