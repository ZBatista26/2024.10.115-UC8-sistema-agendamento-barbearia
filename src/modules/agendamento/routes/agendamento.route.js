const express = require('express');
const AgendamentoController = require('../controller/agendamento.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const router = express.Router();

router.post('/criar', AgendamentoController.criar);

router.get('/listarPorId/:id', AutenticacaoMiddleware.autenticarToken, AgendamentoController.listarPorId);

router.get('/listarTodos', AutenticacaoMiddleware.autenticarToken, AgendamentoController.listarTodos);

router.put('/atualizar/:id', AutenticacaoMiddleware.autenticarToken, AgendamentoController.atualizar);

router.delete('/deletar/:id', AutenticacaoMiddleware.autenticarToken, AgendamentoController.deletar);

module.exports = router