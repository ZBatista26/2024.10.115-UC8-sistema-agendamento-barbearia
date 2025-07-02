const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const Usuário = require('../../usuario/models/usuario.model');

const tempo_acess_token = process.env.TEMPO_ACESS_TOKEN;
const tempo_refresh_token = process.env.TEMPO_REFRESH_TOKEN;

class AutenticarController {
    static gerarTokenAcesso(dadosUsuario) {
        return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
          expiresIn: tempo_acess_token,
        });
      }
      static gerarRefressToken(dadosUsuario) {
        return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
          expiresIn: tempo_refresh_token,
        });
      }
      
}
