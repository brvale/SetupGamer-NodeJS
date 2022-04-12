'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_identificacao: {
        allowNull: true,
        type: Sequelize.STRING(2)
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      nomeEmpresa: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      data_nasc: {
        allowNull: false,
        type: Sequelize.DATE
      },
      identificadorFiscal: {
        allowNull: false,
        type: Sequelize.STRING(18)
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(70)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};