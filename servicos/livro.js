const { db } = require('../firebaseAdmin');

// Retorna todos os livros
async function getTodosLivros() {
    try {
        const snapshot = await db.collection('livros').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Erro ao buscar todos os livros:', error.message);
        throw new Error('Não foi possível buscar os livros.');
    }
}

// Retorna um livro pelo ID
async function getLivroPorId(id) {
    try {
        const livroDoc = await db.collection('livros').doc(String(id)).get();
        if (!livroDoc.exists) {
            throw new Error('Nenhum livro encontrado.');
        }
        return { id: livroDoc.id, ...livroDoc.data() };
    } catch (error) {
        console.error(`Erro ao buscar livro com ID ${id}:`, error.message);
        throw new Error('Não foi possível buscar o livro.');
    }
}

// Insere um novo livro
async function insereLivro(livroNovo) {
    try {
        if (!livroNovo.id) {
            throw new Error('ID do livro é obrigatório para inserir.');
        }
        const livroRef = db.collection('livros').doc(String(livroNovo.id)); // Define o ID do documento com o ID do livro
        await livroRef.set(livroNovo); // Adiciona ou sobrescreve o documento com os dados fornecidos
        console.log(`Livro com ID ${livroNovo.id} inserido com sucesso.`);
    } catch (error) {
        console.error('Erro ao inserir livro:', error.message);
        throw new Error('Não foi possível inserir o livro.');
    }
}

// Modifica um livro existente pelo ID
async function modificaLivro(modificacoes, id) {
    try {
        const livroRef = db.collection('livros').doc(String(id));
        const livroDoc = await livroRef.get();

        if (!livroDoc.exists) {
            throw new Error('Livro não encontrado.');
        }

        await livroRef.update(modificacoes);
        console.log(`Livro com ID ${id} atualizado com sucesso.`);
    } catch (error) {
        console.error(`Erro ao modificar livro com ID ${id}:`, error.message);
        throw new Error('Não foi possível modificar o livro.');
    }
}

// Deleta um livro pelo ID
async function deletaLivro(id) {
    try {
        const livroRef = db.collection('livros').doc(String(id));
        const livroDoc = await livroRef.get();

        if (!livroDoc.exists) {
            throw new Error('Livro não encontrado.');
        }

        await livroRef.delete();
        console.log(`Livro com ID ${id} deletado com sucesso.`);
    } catch (error) {
        console.error(`Erro ao deletar livro com ID ${id}:`, error.message);
        throw new Error('Não foi possível deletar o livro.');
    }
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro,
};
