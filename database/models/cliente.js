const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
  const Cliente = sequelize.define('Cliente', {
    id_cliente: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_identificacao: DataType.STRING(2),
    nome: DataType.STRING(100),
    sobrenome: DataType.STRING(100),
    email: DataType.STRING(100),
    data_nasc: DataType.DATE,
    identificadorFiscal: DataType.STRING(18),
    telefone: DataType.STRING(15),
    senha: DataType.STRING(70),
    admin: DataType.BOOLEAN,
    createdAt: DataType.DATE,
		updatedAt: DataType.DATE
  }, {
    tableName: 'clientes'
  });

  Cliente.associate = (models) => {
    Cliente.hasMany(models.EnderecoEntrega, {
      foreignKey: 'id_cliente'
    }),
    Cliente.hasMany(models.Pedido, {
      foreignKey: 'id_cliente'
    }),
    Cliente.hasMany(models.ListaProduto, {
      foreignKey: 'id_cliente'
    })
  };
  
  return Cliente;
}
