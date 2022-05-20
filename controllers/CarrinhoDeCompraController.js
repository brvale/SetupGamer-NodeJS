const Sequelize = require('sequelize');
const { Produto } = require('../database/models')

module.exports = {
    list: (req, res, next) => {
        res.render('carrinhoDeCompra', {title: "Carrinho | SetupGamer"})
    },

    register: (req, res, next) => {
        
    }
}