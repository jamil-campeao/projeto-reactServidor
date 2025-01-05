const {
    getTodosLivrosFavoritos,
    insereLivroFavorito,
    deletaLivroFavoritoId,
} = require('../servicos/favorito');

async function getLivrosFavoritos(req, res) {
    try {
        const livros = await getTodosLivrosFavoritos();
        res.status(200).json(livros);
    } catch (error) {
        console.error('Erro ao buscar livros favoritos:', error.message);
        res.status(500).send(error.message);
    }
}

async function postLivroFavorito(req, res) {
    try {
        const id = req.params.id;
        await insereLivroFavorito(id);
        res.status(201).send('Livro inserido com sucesso na lista de Favoritos');
    } catch (error) {
        console.error('Erro ao inserir livro nos favoritos:', error.message);
        res.status(500).send(error.message);
    }
}

async function deleteLivroFavorito(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            await deletaLivroFavoritoId(id);
            res.status(200).send('Livro excluído com sucesso da lista de favoritos');
        } else {
            res.status(422).send('ID inválido');
        }
    } catch (error) {
        console.error('Erro ao deletar livro dos favoritos:', error.message);
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivrosFavoritos,
    postLivroFavorito,
    deleteLivroFavorito,
};
