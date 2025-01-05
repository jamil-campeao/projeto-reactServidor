const express = require('express');
const serverless = require('serverless-http');
const { getCategorias } = require('../controladores/categoria');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

const router = express.Router();

router.get('/', getCategorias); // Busca todas as categorias

app.use('/.netlify/functions/categorias', router);

module.exports.handler = serverless(app);
