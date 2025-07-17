const Cliente = require("../models/cliente.model");
const bcrypt =require('bcryptjs')

class ClienteController {

  static async cadastrar(req, res) {
    try {
      const { nome, email, senha } = req.body;
      if (!nome || !email || !senha ) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      // criptografando a senha
      const senhaCriptografada = await bcrypt.hash(senha, 15);
      await Cliente.create({ nome, email, senha: senhaCriptografada });
      res.status(200).json({ msg: 'Usuario criado com sucesso' });
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
    }
  }

  static async perfil(req, res) {
    try {
      const { email } = req.Cliente;
      const cliente = await Cliente.findOne({
        where: {email},
        attributes: ['nome','email','papel']
      });
      if (!cliente) {
        return res.status(401).json({ msg: "Não existe Usuario cadastrado!" });
      }
      res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
    }
  }
}

module.exports = ClienteController