'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pecas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pecas.init({
    nome: DataTypes.STRING(50),
    disponivel: DataTypes.BOOLEAN,
    tipo: DataTypes.STRING(30)
  }, {
    sequelize,
    modelName: 'Pecas',
    tableName: 'pecas',
    freezeTableName: false,
    timestamps: true
  });
  return Pecas;
};