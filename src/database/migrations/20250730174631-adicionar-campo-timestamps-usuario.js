'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Usuario', 'criado_em', {

      type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    });

    await queryInterface.addColumn('Usuario', 'atualizado_em', {

      type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Usuario', 'criado_em');
    await queryInterface.removeColumn('Usuario', 'atualizado_em');
    }
  };
