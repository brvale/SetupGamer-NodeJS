const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const TipoPagamento = sequelize.define('TipoPagamento', {
    id_pagamento: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: DataType.STRING(30),
    desconto: DataType.FLOAT,
  }, {
    tableName: 'tipo_pagamento',
    timestamps: true
  });

  TipoPagamento.associate = (models) => {
    TipoPagamento.hasMany(models.Pedido, {
      foreignKey: 'id_pagamento'
    })
  }
   
  return TipoPagamento;
};