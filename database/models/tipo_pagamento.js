'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoPagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TipoPagamento.init({
    tipo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    desconto: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'TipoPagamento',
    tableName: 'tipo_pagamento',
    freezeTableName: false,
    timestamps: true
  });
  return TipoPagamento;
};