'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    nome: DataTypes.STRING(100),
    descricao: DataTypes.STRING,
    foto: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produto',
    freezeTableName: false,
    timestamps: true
  });
  return Produto;
};