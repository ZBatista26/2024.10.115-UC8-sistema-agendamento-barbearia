const express = require('express');
const BarbeiroController = require('../controller/barbeiro.controller');
const autenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router();


// rota de cadastro
router.post('/cadastrar', BarbeiroController.cadastrar);

router.get('/perfil', autenticacaoMiddleware.autenticarToken, BarbeiroController.perfil);

module.exports = router