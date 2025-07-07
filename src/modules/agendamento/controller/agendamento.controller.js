const Agendamento = require("../models/agendamento.model");

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
            const id = req.params.id
            const agendamento = await Agendamento.findByPk(id);
            if(!agendamento)
                return res.status(404).json({msg: 'Erro ao buscar por ID'})
            res.status(404).json(agendamento)
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar agendamento' });
        }
    };

    static async criar(req, res) {
        try {
            const novo = await Agendamento.create(req.body);
            res.status(201).json({msg: "Agendamento realizado com sucesso!", novo});
        } catch (err) {
            res.status(400).json({ erro: 'Erro ao criar agendamento' });
        }
    };

    static async atualizar(req, res) {
        try {
            const id = req.params.id;
            const agendamento = await Agendamento.findByPk(id);
    
            if (!agendamento) {
                return res.status(404).json({ msg: 'Agendamento não encontrado' });
            }
    
            await agendamento.update(req.body);
            res.json({ msg: 'Agendamento atualizado com sucesso!', agendamento });
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao atualizar agendamento' });
        }
    }

};

module.exports = AgendamentoController