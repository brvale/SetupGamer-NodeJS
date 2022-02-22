'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('produto', { 
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      processador: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      placaMae: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      coolerDoProcessador: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      memoriaRam  : {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      placaDeVideo: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      sdd: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      hd: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      fonte: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      gabinete: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      coolerDoGabinete: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      monitor: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      adaptadorWireless: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      headset: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      teclado: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      mouse: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      cadeiraGamer: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
          } 
      },
      mousePad: {
        type: Sequelize.STRING,
        allowNull: true,
          references: {
            model: "pecas", key: "nome"
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
