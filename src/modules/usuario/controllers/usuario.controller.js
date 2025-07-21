const Usuario = require("../models/usuario.model");
const bcrypt =require('bcrypt')


class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const { nome, email, senha, papel, telefone} = req.body;
      if (!nome || !email || !senha || !papel || !telefone) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      // criptografando a senha
      const senhaCriptografada = await bcrypt.hash(senha, 15);
      await Usuario.create({ nome, email, senha: senhaCriptografada, papel, telefone});
      res.status(200).json({ msg: 'Usuario cadastrado com sucesso.' });
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
    }
  }

  static async visualizarPerfil(req, res) {
    try {
      const { id } = req.usuario
      const usuario = await Usuario.findOne({
        where: {id},
        attributes: ['nome','email', 'papel', 'telefone']
      });
      if (!usuario) {
        return res.status(404).json({ msg: "Não existe Usuario cadastrado!" });
      }
      res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
    }
  }
}

module.exports = UsuarioController