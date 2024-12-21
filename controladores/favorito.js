const {getTodosLivrosFavoritos, insereLivroFavorito, deletaLivroFavoritoId} = require('../servicos/favorito');


function getLivrosFavoritos (req, res) { 
    try {
        const livros = getTodosLivrosFavoritos();
        res.send(livros);
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLivroFavorito(req, res) {
    try {
        const id = req.params.id;
        insereLivroFavorito(id);
        res.status(201);
        res.send('Livro inserido com sucesso na lista de Favoritos');
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivroFavorito(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            deletaLivroFavoritoId(id);
        }
        else {
            res.status(422);
            res.send("ID inválido");       
        }
        res.status(200);
        res.send('Livro excluído com sucesso da lista de favoritos');
        
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivrosFavoritos,
    postLivroFavorito,
    deleteLivroFavorito
};