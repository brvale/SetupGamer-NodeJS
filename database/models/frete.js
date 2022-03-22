'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Frete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Frete.init({
    tipo: DataTypes.STRING,
    valor: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Frete',
    tableName: 'frete',
    freezeTableName: false
  });
  return Frete;
};