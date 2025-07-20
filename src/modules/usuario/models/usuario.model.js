const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Usuario = sequelize.define(
    "Usuario",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: {msg: 'O campo de nome não pode estar vazio.'},
                notNull: {msg: 'Nome é obrigatório'}
            }
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {msg: 'O campo de email não pode estar vazio.'},
                notNull: {msg: 'E-mail é obrigatório'},
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
          papel: {
            type: DataTypes.ENUM('cliente', 'barbeiro'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['cliente', 'barbeiro']],
                    msg: 'Deve coocar cliente ou barbeiro'
                }
            }
          } 
    },
    {
        tableName: "Usuario",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
)
module.exports = Usuario