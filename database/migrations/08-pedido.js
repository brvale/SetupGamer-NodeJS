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
      id_produto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produtos',
          key: 'id_produto'
        }
      },
      id_frete: {
        type: Sequelize.INTEGER,
        references: {
          model: 'frete',
          key: 'id_frete'
        }
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};