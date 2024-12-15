const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const livroFiltrado = livros.find(livro => livro.id === id); // [ {id: 2, nome: "livro teste"}]
    if (!livroFiltrado) {
        throw new Error('Nenhum livro encontrado');
    }
    return livroFiltrado;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));

    const novaListaLivros = [...livros, livroNovo];
    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
};