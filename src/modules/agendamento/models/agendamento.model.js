const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Agendamento = sequelize.define(
    "Agendamento",
    {
        cliente_nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cliente_telefone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                is: {
                    args: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                    msg: "Número de telefone inválido. Verifique se está no formato correto, como (11) 91234-5678 ou 11912345678.",
                },
            },
        },
        servico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        barbeiro: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'agendamentos',
        createdAt: "criado_em",
        updatedAt: "atualizado_em"
    }
)

module.exports = Agendamento;