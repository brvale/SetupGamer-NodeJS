'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListaProduto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.belongsTo(models.Produto, {
        foreignKey: 'id'
      })
    }
  }
  ListaProduto.init({

    idProduto: DataTypes.INTEGER,
    idPedido: DataTypes.INTEGER,
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allownull: false,
    },
  }, {
    sequelize,
    modelName: 'ListaProduto',
    tablename: 'listaProduto',
    /*references: {
      model: Produto,
      key: id
    }*/
  });
  return ListaProduto;
};