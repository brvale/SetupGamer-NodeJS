const Sequelize = require('sequelize');
const { ListaProduto } = require('../database/models');


const lista = {
    salvarDadosCarrinhoUsuario: async ( req, res, next ) {
        const { cliente, produto, quantidade, valor } = req.body;

        const carrinho = {
            cliente = req.session.usuario,
            produto = lista,
            quantidade,
            valor
        };

        await ListaProduto.create({
            where: { 
                id_cliente: carrinho.cliente,
                id_produto: lista,
                quantidade,
                valor
            }
        })
        
        const lista = req.session.produtos;
    }
}