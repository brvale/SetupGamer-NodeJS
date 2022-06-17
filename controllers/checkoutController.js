const Sequelize = require('sequelize');
const { EnderecoEntrega } = require('../database/models');
const { Pedidos } = require('../database/models');

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

    /*compra: async (req, res, next) => {

        res.send('/checkout/frete')
    }*/
}