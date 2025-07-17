const Usuario = require("../models/usuario.model");
const bcrypt =require('bcryptjs')
class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const { nome, email, senha, papel} = req.body;
      if (!nome || !email || !senha || !papel) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      // criptografando a senha
      const senhaCriptografada = await bcrypt.hash(senha, 15);
      await Usuario.create({ nome, email, senha: senhaCriptografada, papel});
      res.status(200).json({ msg: 'Usuario criado com sucesso' });
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
    }
  }
  static async perfil(req, res) {
    try {
      const { email } = req.Usuario
      const usuario = await Usuario.findOne({
        where: {email},
        attributes: ['nome','email', 'papel']
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