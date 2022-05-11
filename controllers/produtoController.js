const Sequelize = require('sequelize');
const {Produto, Categoria} = require('../database/models');

const {validationResult} = require('express-validator');

module.exports = {
    register: async (req, res) => {
        let listaDeErro = validationResult(req);

        if(listaDeErro.isEmpty()) {
            let {id_categoria, nome, valor, descricao, foto, disponivel} = req.body;

            if(disponivel === 'on') {
                disponivel = true
            } else {
                disponivel = false
            }

            let dadosProduto = {
                id_categoria,
                nome,
                valor,
                descricao,
                foto,
                disponivel
            }
            
            await Produto.create(dadosProduto).catch(err => {
                throw new Error(err);
              });
            res.redirect('/');
        } else{
            res.redirect("/cadastrar-produto");
            console.log(listaDeErro.array())
        }
    },

    list: async (req, res, next) => {
        const produtos = await Produto.findAll();
        return res.render('categorias', {produtos, title: "Categorias | SetupGamer"})
    },

    listCart: async (req, res, next) => {
        const produtos = await Produto.findAll();
        return res.render('carrinhoDeCompra', {produtos, title: "Carrinho | SetupGamer"})
    }
}