const express = require('express');
const ClienteController = require('../controller/cliente.controller');
const autenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router();

// rota de cadastro
router.post('/cadastrar', ClienteController.cadastrar);

router.get('/perfil', autenticacaoMiddleware.autenticarToken, ClienteController.perfil);

module.exports = router