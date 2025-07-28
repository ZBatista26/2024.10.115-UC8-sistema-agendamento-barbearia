'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario', [
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        senha: 'senha123',
        papel: 'cliente',
        telefone: '(11) 91234-5678',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 2,
        nome: 'Maria Souza',
        email: 'maria.souza@email.com',
        senha: 'senha456',
        papel: 'barbeiro',
        telefone: '(21) 99876-5432',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 3,
        nome: 'Carlos Lima',
        email: 'carlos.lima@email.com',
        senha: 'senha789',
        papel: 'cliente',
        telefone: '11987654321',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 4,
        nome: 'Ana Paula',
        email: 'ana.paula@email.com',
        senha: 'senha321',
        papel: 'barbeiro',
        telefone: '(31) 98765-4321',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 5,
        nome: 'Pedro Santos',
        email: 'pedro.santos@email.com',
        senha: 'senha654',
        papel: 'cliente',
        telefone: '21912345678',
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuario', null, {});
  }
};
