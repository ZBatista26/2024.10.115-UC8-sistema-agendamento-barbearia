const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Agendamento = sequelize.define(
  "Agendamento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuario", // Nome da tabela (não do arquivo)
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    barbeiroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuario",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    servico: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O serviço não pode estar vazio." },
        notNull: { msg: "Serviço é obrigatório." },
      },
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: "Data e hora inválidas." },
        notNull: { msg: "Data e hora são obrigatórias." },
      },
    },
    status: {
      type: DataTypes.ENUM("agendado", "concluído", "cancelado"),
      allowNull: false,
      defaultValue: "agendado",
      validate: {
        isIn: {
          args: [["agendado", "concluído", "cancelado"]],
          msg: "Status inválido. Use: agendado, concluído ou cancelado.",
        },
      },
    },
  },
  {
    tableName: "Agendamento",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
  }
);

module.exports = Agendamento;