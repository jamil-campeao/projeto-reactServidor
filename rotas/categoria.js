const {Router} = require('express');
const { getCategorias } = require('../controladores/categoria');
const router = Router();

router.get('/', getCategorias); //Busca todas as categorias


module.exports = router;