'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("pedido", {
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: "cliente", key: 'cliente'
        }
      },
      id_peca: {
        type: Sequelize.INTEGER,
        references: {
          model: "peca", key: 'peca'
        }
      },
      id_status: {
        type: Sequelize.INTEGER,
        references: {
          model: "status", key: 'status'
        }
      }
      
    })
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
