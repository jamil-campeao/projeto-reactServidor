const fs = require('fs');

function getTodosLivrosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function deletaLivroFavoritoId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'));
    
    const livrosFiltrados = livros.filter(livro => livro.id !== id);
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados));
}

function insereLivroFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json')); 

    const livroInserido = livros.find(livro => livro.id === id);
    const novaListaLivrosFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivrosFavoritos));
}

module.exports =  {
    getTodosLivrosFavoritos,
    deletaLivroFavoritoId,
    insereLivroFavorito,
};