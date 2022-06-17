const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const Categoria = sequelize.define('Categoria', {
    id_categoria: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataType.STRING(50),
      allownull: false,
    }
  }, {
    tableName: 'categoria',
    timestamps: false
  });
  
  Categoria.associate= (models) => {
    Categoria.hasMany(models.Produto, {
      foreignKey: 'id_categoria'
    })
  }

  return Categoria;
};