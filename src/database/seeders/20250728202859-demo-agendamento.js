'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Agendamento', [
      {
      clienteId: 1,
      barbeiroId: 2,
      servico: 'Corte de cabelo',
      data_hora: new Date('2024-07-01T10:00:00'),
      status: 'agendado',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      clienteId: 3,
      barbeiroId: 2,
      servico: 'Barba',
      data_hora: new Date('2024-07-02T14:00:00'),
      status: 'concluído',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      clienteId: 4,
      barbeiroId: 5,
      servico: 'Corte + Barba',
      data_hora: new Date('2024-07-03T16:30:00'),
      status: 'cancelado',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      clienteId: 1,
      barbeiroId: 5,
      servico: 'Sobrancelha',
      data_hora: new Date('2024-07-04T09:00:00'),
      status: 'agendado',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      clienteId: 3,
      barbeiroId: 2,
      servico: 'Corte de cabelo',
      data_hora: new Date('2024-07-05T11:15:00'),
      status: 'agendado',
      criado_em: new Date(),
      atualizado_em: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
