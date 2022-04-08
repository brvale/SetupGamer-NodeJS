const { Cliente } = require('../database/models')

const { check, validationResult, body } = require("express-validator");

module.exports = {
    register: (req, res) => {
        let listaDeErro = validationResult(req);

        if(listaDeErro.isEmpty()){
            let { nome, sobrenome, email, data_nasc, identificador_fiscal, telefone, senha} = req.body;

            let dadosUsuario = { 
                nome, 
                sobrenome, 
                email, data_nasc, 
                identificador_fiscal, 
                telefone, 
                senha
            }

            return Cliente.push(dadosUsuario);
        }else{
            res.render("cadastro", { errors: listaDeErro.map(), old: req.body });
        }
    },
    login: (req, res) => {

    }
}