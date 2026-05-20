const { Produto } = require('../database/models')

module.exports = {
    filtrarArray: async (req, res) => {
        const peca = req.query.peca || req.body.peca;
        const produto = await Produto.findAll({
            where: {
                peca: peca
            }
        });
        res.json(produto);
    }
}