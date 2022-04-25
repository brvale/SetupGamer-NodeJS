const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const ListaProduto = sequelize.define('ListaProduto', {
    id_listaProduto: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cliente: DataType.INTEGER,
    id_produto: DataType.INTEGER,
    quantidade: DataType.INTEGER,
    valor: DataType.FLOAT,
  }, {
    tableName: 'listaProduto',
    timestamps: true
  });
  
  ListaProduto.associate = (models) => {
    ListaProduto.belongsTo(models.Cliente, {
      foreignKey: 'id_cliente'
    }),
    ListaProduto.belongsTo(models.Produto, {
      foreignKey: 'id_produto'
    })
  }
 
  return ListaProduto;
};