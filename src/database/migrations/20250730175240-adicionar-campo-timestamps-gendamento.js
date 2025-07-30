'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Agendamento', 'criado_em', {

      type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    });
    
    await queryInterface.addColumn('Agendamento', 'atualizado_em', {

      type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Agendamento', 'criado_em');
    await queryInterface.removeColumn('Agendamento', 'atualizado_em');
     
  }
};
