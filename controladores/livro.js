const {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro,
} = require('../servicos/livro');

async function getLivros(req, res) {
    try {
        const livros = await getTodosLivros();
        res.status(200).json(livros);
    } catch (error) {
        console.error('Erro ao buscar livros:', error.message);
        res.status(500).json({ error: 'Erro ao buscar livros.' });
    }
}

async function getLivro(req, res) {
    try {
        const { id } = req.params;
        const livro = await getLivroPorId(id);
        res.status(200).json(livro);
    } catch (error) {
        console.error('Erro ao buscar livro:', error.message);
        res.status(404).json({ error: 'Livro não encontrado.' });
    }
}

async function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        await insereLivro(livroNovo);
        res.status(201).json({ message: 'Livro inserido com sucesso!' });
    } catch (error) {
        console.error('Erro ao inserir livro:', error.message);
        res.status(500).json({ error: 'Erro ao inserir livro.' });
    }
}

async function patchLivro(req, res) {
    try {
        const { id } = req.params;
        const modificacoes = req.body;
        await modificaLivro(modificacoes, id);
        res.status(200).json({ message: 'Livro atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao modificar livro:', error.message);
        res.status(404).json({ error: 'Livro não encontrado.' });
    }
}

async function deleteLivro(req, res) {
    try {
        const { id } = req.params;
        await deletaLivro(id);
        res.status(200).json({ message: 'Livro deletado com sucesso!' });
    } catch (error) {
        console.error('Erro ao deletar livro:', error.message);
        res.status(404).json({ error: 'Livro não encontrado.' });
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro,
};
