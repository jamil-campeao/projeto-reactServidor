const express = require('express');
const serverless = require('serverless-http');
const { getCategorias } = require('../controladores/categoria');

const app = express();
app.use(express.json());

// Rotas
app.get('/categorias', getCategorias); // Busca todas as categorias

// Exporta como função serverless
module.exports.handler = serverless(app);
