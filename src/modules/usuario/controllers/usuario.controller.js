const Usuario = require("../models/usuario.model");
const bcrypt =require('bcryptjs')


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
      const { email } = req.usuario
      const usuario = await Usuario.findOne({
        where: {email},
        attributes: ['nome','email', 'papel', 'telefone']
      });
      if (!usuario) {
        return res.status(404).json({ msg: "Usuário não encontrado." });
      }

      // feita com aaujuda ddo gpt, serve para seguir a regra de negocio, mantendo apenas o campo de telefone
      // em cliente para diferenciar do papel de barbeiro
      const dadosUsuario = {
        nome: usuario.nome,
        email: usuario.email,
        papel: usuario.papel,
        telefone: usuario.telefone
      };

      res.status(200).json(dadosUsuario);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
    }
  }
}

module.exports = UsuarioController