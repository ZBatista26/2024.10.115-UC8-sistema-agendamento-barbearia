const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const autenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router();

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar);

router.get('/perfil', autenticacaoMiddleware.autenticarToken, UsuarioController.perfil);

module.exports = router