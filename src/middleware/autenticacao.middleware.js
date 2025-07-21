const jwt = require("jsonwebtoken");

class AutenticacaoMiddleware {
  // Verifica se o token é válido
  static autenticarToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Formato "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ msg: "Token de acesso não fornecido!" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, usuario) => {
      if (err) {
        return res.status(403).json({ msg: "Token inválido ou expirado!" });
      }

      req.Usuario = usuario; // Payload do token (ex: { id, papel, email })
      next();
    });
  }

  // Middleware extra: restringe acesso por papel (ex: "barbeiro", "cliente"), feito com auxilio de gpt, mas condegui entender o uso!!
  static permitirSomente(...papeisPermitidos) {
    return (req, res, next) => {
      const usuario = req.Usuario;

      if (!usuario || !papeisPermitidos.includes(usuario.papel)) {
        return res.status(403).json({ msg: "Acesso não autorizado para este perfil!" });
      }

      next(); // usuário tem papel autorizado
    };
  }
}

module.exports = AutenticacaoMiddleware;