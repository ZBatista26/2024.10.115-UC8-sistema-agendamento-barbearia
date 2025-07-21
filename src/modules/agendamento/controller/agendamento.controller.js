const Agendamento = require("../models/agendamento.model");

class AgendamentoController {

    static async listarAgendamentos(req, res) {
        try {
            const agendamentos = await Agendamento.findAll();
            res.json(agendamentos);
        } catch (error) {
             res.status(500).json({ erro: 'Erro ao buscar agendamentos' });
        }
    }
    
    static async listarAgendamentoId(req, res) {
        try {
            const id = req.params.id
            const agendamento = await Agendamento.findByPk(id);
            if(!agendamento)
                return res.status(404).json({msg: 'Erro ao buscar agendamento por ID'})
            res.status(200).json(agendamento)
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar agendamento' });
        }
    };

    static async criarAgendamento(req, res) {
        try {
            const novoAgendamento = await Agendamento.create(req.body);
            res.status(201).json({msg: "Agendamento realizado com sucesso!", novoAgendamento});
        } catch (err) {
            res.status(400).json({ erro: 'Erro ao criar agendamento' });
        }
    };

    static async atualizarStatus(req, res) {
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

    static async deletarAgendamento(req, res) {
        try {
            const id = req.params.id;
            const agendamento = await Agendamento.findByPk(id);
    
            if (!agendamento) {
                return res.status(404).json({ msg: 'Agendamento não encontrado' });
            }
    
            await agendamento.destroy();
            res.json({ msg: 'Agendamento excluído com sucesso!' });
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao excluir agendamento' });
        }
    }

};

module.exports = AgendamentoController