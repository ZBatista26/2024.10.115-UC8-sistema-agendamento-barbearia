const express = require('express');
const UsuarioController = require('../controller/usuario.controller');
const autenticacaoMiddleware = require('../middleware/usuario.middleware')
const router = express.Router()

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar);

router.get('/perfil', autenticacaoMiddleware.autenticarToken, UsuarioController.perfil);

module.exports = router