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

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    if (indiceModificado === -1) {
        throw new Error("Livro não encontrado");
    }
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais));
}

function deletaLivro(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const livrosFiltrados = livros.filter(livro => livro.id !== id); // [ {id: 2, nome: "livro teste"}]
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
};