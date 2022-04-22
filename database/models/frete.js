const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const Frete = sequelize.define('Frete', {
    id_frete: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: DataType.STRING,
    valor: DataType.FLOAT
  }, {
    tableName: 'frete',
  });
  
  Frete.associate = (models) => {
    Frete.hasMany(models.Pedido, {
      foreignKey: 'id_frete'
    })
  }
   
  return Frete;
};