'use strict';



module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('tipo_pagamento', { 
       id_pagamento: {
         type: Sequelize.INTEGER,
         allowNull: true,
         primaryKey: true,
         autoIncrement: true,
       },
       nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
       tipo_cartao: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       numero_cartao: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       idf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cliente", key: "id_cliente"
        } 
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
