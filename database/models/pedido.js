const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define('Pedido', {
    id_pedido: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cliente: DataType.INTEGER,
    id_pagamento: DataType.INTEGER,
    id_endereco: DataType.INTEGER,
    id_frete: DataType.INTEGER,
    valor: DataType.FLOAT,
    status: DataType.STRING
  }, {
    tableName: 'pedidos',
    timestamps: true
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Cliente, {
      foreignKey: 'id_cliente'
    }),
    Pedido.belongsTo(models.TipoPagamento, {
      foreignKey: 'id_pagamento'
    }),
    Pedido.belongsTo(models.EnderecoEntrega, {
      foreignKey: 'id_endereco'
    }),
    Pedido.belongsTo(models.Produto, {
      foreignKey: 'id_produto'
    }),
    Pedido.belongsTo(models.Frete, {
      foreignKey: 'id_frete'
    })
  }
   
  return Pedido;
};