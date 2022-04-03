//Permite usar os operadores para isso passando dentro dos parenteses em forma de array no caso --> chave: {[Op.like]: `%${key}%`}
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


//Importando a model com desestruturação mostrando o caminho apenas até a model pois o index se encarrega de buscar por ela
const { Pecas } = require('../database/models')

const metodo = {
    //buscar peças todas as peças
    adicionarNoCarrinho: async (req, res) => {
        let produto = await Pecas.findAll({
            where: {
                peca: exemplo
            }
        });

        return res.render('carrinhoDeCompra', { produto });
    }

    //buscar por uma peça expecifica

}

module.exports = metodo;