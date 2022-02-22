'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('cliente', { 
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tipo_identificacao: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      identificador_fiscal: {
        type: Sequelize.STRING(18),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes')
  }
};
