const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define('Produto', {
    id_produto: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_categoria: DataType.INTEGER,
    nome: DataType.STRING(100),
    valor: DataType.FLOAT(5,2),
    descricao: DataType.STRING,
    foto: DataType.STRING,
    disponivel: DataType.BOOLEAN,
  }, {
    tableName: 'produtos'
  });

  Produto.associate = (models) => {
    Produto.belongsTo(models.Categoria, {
      foreignKey: 'id_categoria'
    }),
    Produto.hasMany(models.ListaProduto, {
      foreignKey: 'id_produto',
    }),
    Produto.hasMany(models.Pedido, {
      foreignKey: 'id_produto',
    })
  }
   
  return Produto;
};