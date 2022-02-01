const db = require('./models');


//testa a conexão com o banco
async function teste(){
    try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

teste()