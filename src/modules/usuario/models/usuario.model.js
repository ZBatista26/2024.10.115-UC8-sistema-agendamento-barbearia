const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'O campo de nome não pode estar vazio.' },
        notNull: { msg: 'Nome é obrigatório' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'O campo de email não pode estar vazio.' },
        notNull: { msg: 'E-mail é obrigatório' },
        isEmail: { msg: "Email inválido" },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    papel: {
      type: DataTypes.ENUM('cliente', 'barbeiro'),
      allowNull: false,
      validate: {
        isIn: {
          args: [['cliente', 'barbeiro']],
          msg: 'Deve colocar cliente ou barbeiro'
        }
      }
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: {
          args: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
          msg: "Número de telefone inválido. Verifique se está no formato correto, como (11) 91234-5678 ou 11912345678.",
        },
      },
    },
  },
  {
    tableName: "Usuario",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
  }
)
module.exports = Usuario