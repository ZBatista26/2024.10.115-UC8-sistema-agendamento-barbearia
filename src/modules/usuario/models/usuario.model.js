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
                    msg: 'Deve colocar cliente ou barbeiro'
                }
            }
          },

          // pesquisei maneiras de como poderia adicionar o telefone apenas em Cliente e preferi
          // fazer desssa forma.
          telefone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                  is: {
                    args: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                    msg: "Número de telefone inválido. Use o formato (11) 91234-5678.",
          },
            telefoneCliente(value) {
              if (value && this.papel !== "cliente") {
                throw new Error("Apenas clientes podem ter telefone.");
      }
    },
  },
}
    },
    {
        tableName: "Usuario",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
)
module.exports = Usuario