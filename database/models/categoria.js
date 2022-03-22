'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categoria.init({
    nome: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categoria',
    freezeTableName: false
  });
  return Categoria;
};