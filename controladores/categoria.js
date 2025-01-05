const { getTodasCategorias } = require('../servicos/categoria');

async function getCategorias(req, res) {
    try {
        const categorias = await getTodasCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error.message);
        res.status(500).json({ error: 'Erro ao buscar categorias.' });
    }
}

module.exports = {
    getCategorias,
};
