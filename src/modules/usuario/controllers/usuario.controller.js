const Usuario = require("../models/usuario.model");
const bcrypt =require('bcryptjs');

class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const {nome, email, senha, papel, telefone} = req.body;

      //verificações
      if (telefone && papel !== 'cliente') {
        return res.status(400).json({ msg: 'Campo telefone apenas para clientes.'})
      }
      if (!nome || !email || !senha || !papel) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }

      // criptografando a senha
      const senhaCriptografada = await bcrypt.hash(senha, 15);

      //Criar o usuário
      const novoUsuario = await Usuario.create({ nome, email, senha: senhaCriptografada, papel, telefone: papel === 'cliente' ? telefone : null});
      res.status(201).json({ msg: 'Usuário cadastrado com sucesso!', novoUsuario });
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
    }
  }

  static async perfil(req, res) {
    try {
      const { id } = req.Usuario
      const usuario = await Usuario.findOne({
        where: { id },
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
        ...(usuario.papel === 'cliente' && { telefone: usuario.telefone })
      };

      res.status(200).json(dadosUsuario);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
    }
  }
}

module.exports = UsuarioController