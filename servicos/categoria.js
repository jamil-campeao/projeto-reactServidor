const { db } = require('../firebaseAdmin');

async function getTodasCategorias() {
    try {
        const snapshot = await db.collection('categorias').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Erro ao buscar categorias:', error.message);
        throw new Error('Não foi possível buscar as categorias.');
    }
}

module.exports = {
    getTodasCategorias,
};
