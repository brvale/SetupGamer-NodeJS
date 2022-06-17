const Sequelize = require('sequelize');
const { EnderecoEntrega } = require('../database/models');

const { Frete, Tipo_Pagamento, ListaProduto, Pedido } = require('../database/models');

module.exports = {
    endereco: async (req, res, next) => {
const enderecoUsuario = await EnderecoEntrega.findOne({
    where: {
                id_cliente: req.session.usuario.id_cliente
            }
        })
        res.render("endereco", { title: "Endereço de entrega", enderecoUsuario})
    },
    
    salvarEndereco: async (req, res, next) => {
        const {cep, nomeDestinatario, rua, numero, complemento, bairro} = req.body;
        
        const [endereco, created] = await EnderecoEntrega.findOrCreate({
            where: {
                id_cliente: req.session.usuario.id_cliente
            },

            defaults: {
                id_cliente: req.session.usuario.id_cliente,
                cep,
                destinatario: nomeDestinatario,
                rua,
                numero_rua: numero,
                complemento,
                bairro
            }
        })

        if(created) {
            return res.redirect('/checkout/frete');
        }

        endereco.cep = cep;
        endereco.destinatario = nomeDestinatario;
        endereco.rua = rua;
        endereco.numero_rua = numero;
        endereco.complemento = complemento;
        endereco.bairro = bairro;
        
        await endereco.save();

        req.session.endereco = endereco;
        res.redirect('/checkout/frete');
    },

    salvarProduto: (req, res, next) => {
        console.log(req.body)
        req.session.produtos = req.body;
        res.send('/checkout/endereco')
    },

    somarTotalPedido: async function(req, res, next) {
        const { produtos, frete } = req.session;
    
        const dadosFrete = await Frete.findOne({ 
            where: { 
                id_frete: frete
            }
        })
    
        let totalProdutos = 0;
    
        produtos.forEach(produto => {
            totalProdutos += produto.valor * produto.quantidade;
        })
    
        const totalGeral = dadosFrete.valor + totalProdutos;
        req.session.totalGeral = totalGeral;
    
        res.render("pagamento", { title: "Forma de pagamento", totalProdutos, totalGeral, frete: dadosFrete.valor });
    },

    pagamento: (req, res, next) => {
        req.session.frete = req.body.transporte;
        res.redirect('/checkout/pagamento');
    },


    pedido: async (req, res, next) => {
        req.session.pagamento = req.body.radio;
    
            console.log(req.session)
        const novoPedido = await Pedido.create({ 
            id_cliente: req.session.usuario.id_cliente,
            id_pagamento: req.session.pagamento,
            id_endereco: req.session.endereco.id_endereco,
            id_frete: req.session.frete,
            valor: req.session.totalGeral
        })
    
        req.session.produtos.forEach(async produto => {
            const total = produto.valor * produto.quantidade;
    
            await ListaProduto.create({
                id_pedido: novoPedido.id_pedido,
                id_produto: produto.id_produto,
                quantidade: produto.quantidade,
                valor: total
            }).catch(console.trace)
        })
    
        //res.send('deu certo')
        res.redirect('/checkout/Concluido');
    }
}