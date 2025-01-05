const { getTodasCategorias } = require("../servicos/categoria");


function getCategorias (req, res) { 
    try {
        const categorias = getTodasCategorias();
        res.send(categorias);
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getCategorias,
};