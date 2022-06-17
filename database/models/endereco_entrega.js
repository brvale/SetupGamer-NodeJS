const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const EnderecoEntrega = sequelize.define('EnderecoEntrega', {
    id_endereco: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cliente: DataType.INTEGER,
    cep: DataType.STRING(9),
    destinatario: DataType.STRING(100),
    rua: DataType.STRING(100),
    numero_rua: DataType.INTEGER,
    complemento: DataType.STRING(100),
    bairro: DataType.STRING(100)
  }, {
    tableName: 'endereco_entrega',
    timestamps: true
  });

  EnderecoEntrega.associate = (models) => {
      EnderecoEntrega.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente'
      }),
      EnderecoEntrega.hasMany(models.Pedido, {
        foreignKey: 'id_endereco'
      })
    }

  return EnderecoEntrega;
};