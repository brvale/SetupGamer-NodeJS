const {Produto} = require('../database/models');

const {validationResult} = require('express-validator');

module.exports = {
    register: async (req, res) => {
        let listaDeErro = validationResult(req);

        if(listaDeErro.isEmpty()) {
            let {nome, valor, descricao, foto, disponivel} = req.body;

            if(disponivel === 'on') {
                disponivel = true
            } else {
                disponivel = false
            }

            let dadosProduto = {
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
    }
}