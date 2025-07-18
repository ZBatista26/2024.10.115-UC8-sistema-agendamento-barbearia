const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Cliente = sequelize.define(
    "Cliente",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validade: {
              notEmpty: { msg: "O campo nome não pode estar vazio."},
              notNull: { msg: "O nome é obrigatório."}
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: { msg: "Email inválido" },
            },
          },
          senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              is: {
                args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                msg: "A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.",
              },
            },
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
        tableName: "cliente",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
)
module.exports = Cliente