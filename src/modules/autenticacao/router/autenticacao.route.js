const express = require('express');
const router = express.Router()

const AutenticacaoController = require('../controller/autenticacao.controller');

// Rota publica de login.
router.post('/login', AutenticacaoController.login);

// Rota para sair.
router.post('/logout', AutenticacaoController.sair);

// Rota usada oara sair.
router.post('refresh-token', AutenticacaoController.refreshToken);

module.exports = router