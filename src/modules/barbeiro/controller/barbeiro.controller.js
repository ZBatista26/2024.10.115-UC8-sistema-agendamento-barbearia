// const Barbeiro = require("../models/barbeiro.model");
// const bcrypt = require('bcrypt');

// class BarbeiroController {

//     static async cadastrar(req, res) {
//         try {
//             const {nome, email, senha} = req.body;
//             if (!nome || !email || !senha){
//                 return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
//             }
//             const senhaCriptografada = await bcrypt.hash(senha, 15);
//             await Barbeiro.create({nome, email, senha: senhaCriptografada});
//             res.status(200).json({ msg: 'Barbeiro criado com sucesso' });
//         } catch (error) {
//             res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
//         }
//     }
    
//      static async perfil(req, res) {
//     try {
//       const { email } = req.Barbeiro;
//       const barbeiro = await Barbeiro.findOne({
//         where: {email},
//         attributes: ['nome', 'email']
//       });

//       if (!barbeiro) {
//         return res.status(401).json({ msg: "Não existe barbeiro cadastrado!" });
//       }
//       res.status(200).json(barbeiro);
//     } catch (error) {
//         res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
//     }
//   }
    
// };

// module.exports = BarbeiroController