'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      papel: {
        type: Sequelize.ENUM('cliente', 'barbeiro'),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
    // Adicionar índices para otimização
      await queryInterface.addIndex('Usuario', ['email']);
      await queryInterface.addIndex('Usuario', ['papel']);
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('Usuario');

  }
};
