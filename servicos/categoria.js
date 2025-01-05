const fs = require('fs');

function getTodasCategorias() {
    return JSON.parse(fs.readFileSync('categorias.json'));
}

module.exports =  {
    getTodasCategorias,
};