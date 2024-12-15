const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require('../servicos/livro');

function getLivros (req, res) { 
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getLivro(req, res) { 
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            const livro = getLivroPorId(id);
            res.send(livro);
        }
        else {
            res.status(422);
            res.send("ID inválido");
        }
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        if (!req.body.nome) {
            res.status(422);
            res.send("O campo nome é obrigatório!");
        }
        else {
            insereLivro(livroNovo);
            res.status(201);
            res.send('Livro inserido com sucesso');
        }
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        if(id && Number(id) && (req.body.nome)) {
            modificaLivro(body, id);
        }
        else {
            res.status(422);
            res.send("ID ou nome informados corretamente");   
        }
        res.status(200);
        res.send('Dados do livro alterados com sucesso');
        
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            deletaLivro(id);
        }
        else {
            res.status(422);
            res.send("ID inválido");       
        }
        res.status(200);
        res.send('Livro excluído com sucesso');
        
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};