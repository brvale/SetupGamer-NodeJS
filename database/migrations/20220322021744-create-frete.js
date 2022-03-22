'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('frete', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING(20)
      },
      valor: {
        type: Sequelize.DECIMAL(3, 2)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('frete');
  }
};