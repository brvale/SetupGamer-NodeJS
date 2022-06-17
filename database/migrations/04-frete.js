'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('frete', {
      id_frete: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING(20)
      },
      valor: {
        type: Sequelize.FLOAT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('frete');
  }
};