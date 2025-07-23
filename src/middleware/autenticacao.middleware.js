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

      req.usuario = usuario; // Payload do token (ex: { id, papel, email })
      next();
    });
  }
}

module.exports = AutenticacaoMiddleware;