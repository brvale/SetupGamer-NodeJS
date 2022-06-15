const Sequelize = require('sequelize');
const { EnderecoEntrega } = require('../database/models');

module.exports = {
    endereco: async (req, res, next) => {
        console.log(req.body);
        const enderecoUsuario = await EnderecoEntrega.findOne({
            where: {
                id_cliente: 1
            }
        })
        res.render("endereco", { title: "Endereço de entrega", enderecoUsuario})
    },

    salvarEndereco: async (req, res, next) => {
        const {cep, nomeDestinatario, rua, numero, complemento, bairro} = req.body;

        const [endereco, created] = await EnderecoEntrega.findOrCreate({
            where: {
                id_cliente: 1
            },

            defaults: {
                id_cliente: 1,
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
        res.redirect('/checkout/frete');
    },

    register: (req, res, next) => {
        
    }
}