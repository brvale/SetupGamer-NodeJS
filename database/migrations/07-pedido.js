'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id_pedido: {
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
      id_pagamento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_pagamentos',
          key: 'id_pagamento'
        }
      },
      id_endereco: {
        type: Sequelize.INTEGER,
        references: {
          model: 'endereco_entrega',
          key: 'id_endereco'
        }
      },
      id_frete: {
        type: Sequelize.INTEGER,
        references: {
          model: 'frete',
          key: 'id_frete'
        }
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING(30)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};