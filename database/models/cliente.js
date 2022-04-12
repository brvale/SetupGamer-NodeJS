'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Cliente.init({
    nome: DataTypes.STRING(100),
    sobrenome: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    data_nasc: DataTypes.DATE,
    identificadorFiscal: DataTypes.STRING(18),
    telefone: DataTypes.STRING(15),
    senha: DataTypes.STRING(70)
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes',
    freezeTableName: false,
    timestamps: true
  });
  return Cliente;
};

// cliente -> categoria -> produtos 1:N -> Pedidos foreignkey endereco, frete, listaProduto, listaPedido
//sequelize model:generate --name tipo_midia --attributes nome:string, tipo_tag:
