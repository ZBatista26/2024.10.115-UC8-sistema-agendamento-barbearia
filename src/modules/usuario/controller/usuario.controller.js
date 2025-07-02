const usuario = require("../models/usuario.model");
const bcrypt = require('bcryptjs');

class UsuarioController {

    static async cadastrar(req, res) {
        try {
            const {nome, email, senha, telefone} = req.body;
            if (!nome || !email || !senha){
                return res.starus(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            const senhaCriptografada = await bcrypt.hash(senha, 15);
            await usuario.create({nome, email, senha: senhaCriptografada, telefone});
            res.status(200).json({ msg: 'Usuário criado com sucesso' });
        } catch (error) {
            res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
        }
    }
}

module.exports = UsuarioController