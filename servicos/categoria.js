const fs = require('fs');
const path = require('path');

function getTodasCategorias() {
    const filePath = path.join(__dirname, '../categorias.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = {
    getTodasCategorias,
};
