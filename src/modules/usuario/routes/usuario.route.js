const express = require('express');
const UsuarioController = require('../controller/usuario.controller');

const router = express.Router()

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar)

module.exports = router