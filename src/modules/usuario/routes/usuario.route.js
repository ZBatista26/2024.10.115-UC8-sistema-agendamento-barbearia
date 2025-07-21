const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const autenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router();

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar);
// rota de perfil
router.get('/visualizarPerfil', autenticacaoMiddleware.autenticarToken, UsuarioController.visualizarPerfil);

module.exports = router