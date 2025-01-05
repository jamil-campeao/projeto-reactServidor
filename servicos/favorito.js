const { db } = require('../firebaseAdmin');

// Retorna todos os livros favoritos
async function getTodosLivrosFavoritos() {
    try {
        const snapshot = await db.collection('favoritos').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Erro ao buscar livros favoritos:', error.message);
        throw new Error('Não foi possível buscar os livros favoritos.');
    }
}

// Deleta um livro favorito pelo ID
async function deletaLivroFavoritoId(id) {
    try {
        const docRef = db.collection('favoritos').doc(String(id));
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Livro com ID ${id} não encontrado nos favoritos.`);
        }

        await docRef.delete();
        console.log(`Livro com ID ${id} removido dos favoritos.`);
    } catch (error) {
        console.error('Erro ao deletar livro dos favoritos:', error.message);
        throw new Error('Não foi possível deletar o livro dos favoritos.');
    }
}

// Insere um livro nos favoritos pelo ID
async function insereLivroFavorito(id) {
    try {
        // Verifica se o livro existe na coleção 'livros'
        const livroRef = db.collection('livros').doc(String(id));
        const livroSnapshot = await livroRef.get();

        if (!livroSnapshot.exists) {
            throw new Error(`Livro com ID ${id} não encontrado na coleção 'livros'.`);
        }

        const livroData = livroSnapshot.data();

        // Verifica se o livro já está nos favoritos
        const favoritoRef = db.collection('favoritos').doc(String(id));
        const favoritoSnapshot = await favoritoRef.get();

        if (favoritoSnapshot.exists) {
            throw new Error(`Livro com ID ${id} já está nos favoritos.`);
        }

        // Insere o livro nos favoritos
        await favoritoRef.set(livroData);
        console.log(`Livro com ID ${id} inserido nos favoritos com sucesso.`);
    } catch (error) {
        console.error('Erro ao inserir livro nos favoritos:', error.message);
        throw new Error('Não foi possível inserir o livro nos favoritos.');
    }
}

module.exports = {
    getTodosLivrosFavoritos,
    deletaLivroFavoritoId,
    insereLivroFavorito,
};
