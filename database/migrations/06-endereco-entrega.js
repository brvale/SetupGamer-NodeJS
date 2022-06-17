'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('endereco_entrega', {
      id_endereco: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'id_cliente'
        }
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING(9)
      },
      destinatario: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      rua: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      numero_rua: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      complemento: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('endereco_entrega');
  }
};