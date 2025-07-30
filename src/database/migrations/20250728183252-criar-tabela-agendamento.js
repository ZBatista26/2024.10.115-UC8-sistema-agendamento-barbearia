'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Agendamento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Usuario", // Nome da tabela (não do arquivo)
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      barbeiroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Usuario",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      servico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("agendado", "concluído", "cancelado"),
        allowNull: false,
        defaultValue: "agendado",
      },
    
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Agendamento');

  }
};

