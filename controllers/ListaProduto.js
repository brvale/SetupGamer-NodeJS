const { ListaProduto } = require('../database/models');

const lista = {
    salvarDadosCarrinhoUsuario: async ( req, res, next ) => {
        const { cliente, produto, quantidade, valor } = req.body;

        const carrinho = {
            cliente: req.session.usuario.id_cliente,
            produto: produto,
            quantidade,
            valor
        };

        await ListaProduto.create({
            id_cliente: carrinho.cliente,
            id_produto: carrinho.produto,
            quantidade: carrinho.quantidade,
            valor: carrinho.valor
        });
        
        res.json({ success: true, message: 'Produto adicionado ao carrinho' });
    }
}

module.exports = lista;