const Cliente = require("../models/");
const bcrypt = require('bcrypt');
const Usuario = require("../models/usuario.model");

class UsuarioController {

    static async cadastrar(req, res) {
        try {
            const {nome, email, senha, telefone} = req.body;
            if (!nome || !email || !senha){
                return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            const senhaCriptografada = await bcrypt.hash(senha, 15);
            await Cliente.create({nome, email, senha: senhaCriptografada, telefone});
            res.status(200).json({ msg: 'Usuario criado com sucesso' });
        } catch (error) {
            res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
        }
    }
     static async perfil(req, res) {
    try {
      const { email } = req.Usuario;
      const usuario = await Usuario.findOne({
        where: {email},
        attributes: ['nome', 'email', 'telefone']
      });

      if (!usuario) {
        return res.status(401).json({ msg: "Não existe usuario cadastrado!" });
      }
      res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
    }
  }
    
};

module.exports = UsuarioController