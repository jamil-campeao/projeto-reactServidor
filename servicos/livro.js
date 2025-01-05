const fs = require('fs');
const path = require('path');
const filePathLivro = path.join(__dirname, '../data/livros.json');

// Função para ler um arquivo JSON com segurança
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

// Retorna todos os livros
function getTodosLivros() {
    return readJSON(filePathLivro);
}

// Retorna um livro pelo ID
function getLivroPorId(id) {
    const livros = readJSON(filePathLivro);
    const livroFiltrado = livros.find(livro => livro.id === id);
    if (!livroFiltrado) {
        throw new Error('Nenhum livro encontrado');
    }
    return livroFiltrado;
}

// Insere um novo livro
function insereLivro(livroNovo) {
    const livros = readJSON(filePathLivro);
    const novaListaLivros = [...livros, livroNovo];
    writeJSON(filePathLivro, novaListaLivros);
}

// Modifica um livro existente pelo ID
function modificaLivro(modificacoes, id) {
    let livrosAtuais = readJSON(filePathLivro);
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    if (indiceModificado === -1) {
        throw new Error("Livro não encontrado");
    }
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;
    writeJSON(filePathLivro, livrosAtuais);
}

// Deleta um livro pelo ID
function deletaLivro(id) {
    const livros = readJSON(filePathLivro);
    const livrosFiltrados = livros.filter(livro => livro.id !== id);
    writeJSON(filePathLivro, livrosFiltrados);
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro,
};
