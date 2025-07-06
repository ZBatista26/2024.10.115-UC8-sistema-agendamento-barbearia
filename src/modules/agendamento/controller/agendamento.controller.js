const Agendamento = require("../models/agendamento.model");
const bcrypt = require('bcrypt');

class AgendamentoController {

    static async listarTodos(req, res) {
        try {
            const agendamentos = await Agendamento.findAll();
            res.json(agendamentos);
        } catch (error) {
             res.status(500).json({ erro: 'Erro ao buscar agendamentos' });
        }
    }
    
    static async listarPorId(req, res) {
        try {
            const agendamento = await Agendamento.findByPk(req.params.id);
            if(!agendamento)
                return res.status(404).json({msg: 'Erro ao buscar por ID'})
            res.json(agendamento)
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar agendamento' });
        }
    }

    static async criar(req, res) {
        try {
            const novo = await Agendamento.create(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ erro: 'Erro ao criar agendamento' });
        }
    }
}

module.exports = AgendamentoController