const express = require('express');
const AgendamentoController = require('../controller/agendamento.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require('../../../middleware/autorizacao.middleware')
const router = express.Router();

router.post('/criarAgendamento', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['cliente']), AgendamentoController.criar, );

router.get('/listarAgendamentoId/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['cliente', 'barbeiro']), AgendamentoController.listarPorId);

router.get('/listarAgendamentos', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['barbeiro']), AgendamentoController.listarTodos);

router.put('/atualizarStatus/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['barbeiro']), AgendamentoController.atualizar);

router.delete('/excluirAgendamentro/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['cliente']), AgendamentoController.deletar);

module.exports = router