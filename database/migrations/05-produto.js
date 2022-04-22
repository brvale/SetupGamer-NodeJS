'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id_produto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id_categoria'
        }
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT(5, 2)
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      foto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      disponivel: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('produtos');
  }
};