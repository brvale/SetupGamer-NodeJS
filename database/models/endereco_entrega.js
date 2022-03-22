'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnderecoEntrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnderecoEntrega.init({
    cep: DataTypes.STRING(9),
    destinatario: DataTypes.STRING(100),
    rua: DataTypes.STRING(100),
    numero_rua: DataTypes.INTEGER,
    complemento: DataTypes.STRING(100),
    bairro: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'EnderecoEntrega',
    tableName: 'endereco_entrega',
    freezeTableName: false,
    timestamps: true
  });
  return EnderecoEntrega;
};