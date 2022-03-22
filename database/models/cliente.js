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
      // define association here
    }
  }
  Cliente.init({
    tipo_identificacao: DataTypes.STRING(2),
    nome: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    data_nasc: DataTypes.DATE,
    identificador_fiscal: DataTypes.STRING(18),
    telefone: DataTypes.STRING(15),
    senha: DataTypes.STRING(70)
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'cliente',
    freezeTableName: false,
    timestamps: true
  });
  return Cliente;
};