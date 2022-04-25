const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Produto } = require('../database/models')

module.exports = {
    filtrarArray: async (req, res) => {
        const produto = await Produto.findAll
    }
}