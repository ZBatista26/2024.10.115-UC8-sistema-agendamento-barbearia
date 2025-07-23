const express = require('express');
const AgendamentoController = require('../controller/agendamento.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require("../../../middleware/autorizacao.middleware")

const router = express.Router();

router.post('/criarAgendamento',  AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['cliente']),AgendamentoController.criarAgendamento);

router.get('/listarAgendamentoId/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['barbeiro']), AgendamentoController.listarAgendamentoId);

router.get('/listarAgendamentos', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['barbeiro', 'cliente']), AgendamentoController.listarAgendamentos);

router.put('/atualizarStatus/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['barbeiro']), AgendamentoController.atualizarStatus);

router.delete('/deletarAgendamento/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['cliente']), AgendamentoController.deletarAgendamento);

module.exports = router