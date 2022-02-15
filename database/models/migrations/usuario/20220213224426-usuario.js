'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      dataDeNascimento: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      flag: {
        type: Sequelize.BOOLEAN(),
        allowNull: false,
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
