const { Cliente } = require('../database/models')

const { check, validationResult, body } = require("express-validator");

module.exports = {
    register: async (req, res) => {
        let listaDeErro = validationResult(req);

        console.log(req.body)

        if(listaDeErro.isEmpty()){
            let { nome, sobrenome, email, dataDeNascimento, identificadorFiscal, telefone, senha} = req.body;

            let dadosUsuario = { 
                nome, 
                sobrenome, 
                email, 
                data_nasc: dataDeNascimento, 
                identificadorFiscal, 
                telefone, 
                senha
            }

            
            await Cliente.create(dadosUsuario)
            res.redirect("/#modal")
        }else{
            res.redirect("/cadastro");
            console.log(listaDeErro.array())
        }
    }
}

