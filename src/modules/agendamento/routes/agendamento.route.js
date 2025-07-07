const express = require('express');
const AgendamentoController = require('../controller/agendamento.controller');
const AutenticacaoMiddleware = require('../../usuario/middleware/usuario.middleware');
const router = express.Router();

router.post('/criar', AgendamentoController.criar);

router.get('/listarPorId/:id', AutenticacaoMiddleware.autenticarToken, AgendamentoController.listarPorId);

router.get('/listarTodos', AutenticacaoMiddleware.autenticarToken, AgendamentoController.listarTodos);

router.put('/atualizar/:id', AutenticacaoMiddleware.autenticarToken, AgendamentoController.atualizar);

module.exports = router