const fs = require('fs');
const path = require('path');

// Caminhos absolutos para os arquivos JSON
const filePathFavoritos = path.join(__dirname, '../data/favoritos.json');
const filePathLivros = path.join(__dirname, '../data/livros.json');

function readJSON(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (error) {
        console.error(`Erro ao ler o arquivo ${filePath}:`, error.message);
        return []; // Retorna uma lista vazia em caso de erro
    }
}

// Função para escrever em um arquivo JSON com segurança
function writeJSON(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Erro ao escrever no arquivo ${filePath}:`, error.message);
    }
}

// Retorna todos os livros favoritos
function getTodosLivrosFavoritos() {
    return readJSON(filePathFavoritos);
}

// Deleta um livro favorito pelo ID
function deletaLivroFavoritoId(id) {
    const favoritos = readJSON(filePathFavoritos);
    const livrosFiltrados = favoritos.filter(livro => livro.id !== id);
    writeJSON(filePathFavoritos, livrosFiltrados);
}

// Insere um livro nos favoritos pelo ID
function insereLivroFavorito(id) {
    const livros = readJSON(filePathLivros);
    const favoritos = readJSON(filePathFavoritos);

    const livroInserido = livros.find(livro => livro.id === id);
    if (!livroInserido) {
        throw new Error(`Livro com ID ${id} não encontrado.`);
    }

    const novaListaLivrosFavoritos = [...favoritos, livroInserido];
    writeJSON(filePathFavoritos, novaListaLivrosFavoritos);
}

module.exports = {
    getTodosLivrosFavoritos,
    deletaLivroFavoritoId,
    insereLivroFavorito,
};
