const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const ListaProduto = sequelize.define('ListaProduto', {
    id_pedido: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_produto: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    quantidade: DataType.INTEGER,
    valor: DataType.FLOAT,
  }, {
    tableName: 'lista_produtos',
    timestamps: true
  });
  
  ListaProduto.associate = (models) => {
    ListaProduto.belongsTo(models.Pedido, {
      foreignKey: 'id_pedido'
    }),
    ListaProduto.belongsTo(models.Produto, {
      foreignKey: 'id_produto'
    })
  }
 
  return ListaProduto;
};