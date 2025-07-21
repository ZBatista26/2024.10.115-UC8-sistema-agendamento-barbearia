const express = require('express');
const AgendamentoController = require('../controller/agendamento.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require("../../../middleware/autorizacao.middleware")

const router = express.Router();

router.post('/criarAgendamento', AutorizacaoMiddleware.autorizar(['cliente']), AutenticacaoMiddleware.autenticarToken, AgendamentoController.criarAgendamento);

router.get('/listarAgendamentoId/:id', AutorizacaoMiddleware.autorizar(['barbeiro']), AutenticacaoMiddleware.autenticarToken, AgendamentoController.listarAgendamentoId);

router.get('/listarAgendamentos', AutorizacaoMiddleware.autorizar(['barbeiro', 'cliente']), AutenticacaoMiddleware.autenticarToken, AgendamentoController.listarAgendamentos);

router.put('/atualizarStatus/:id', AutorizacaoMiddleware.autorizar(['cliente']), AutenticacaoMiddleware.autenticarToken, AgendamentoController.atualizarStatus);

router.delete('/deletarAgendamento/:id', AutorizacaoMiddleware.autorizar(['']), AutenticacaoMiddleware.autenticarToken, AgendamentoController.deletarAgendamento);

module.exports = router