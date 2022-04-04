const { Cliente } = require('../database/models')

const { check, validationResult, body } = require("express-validator");

module.exports = {
    register: (req, res) => {
        let listaDeErro = validationResult(req);

        if(listaDeErro.isEmpty()){
            let { nome, sobrenome, email, dataDeNascimento, cpf, genero, telefone, senha} = req.body;

            let dadosUsuario = { 
                nome, 
                sobrenome, 
                email, 
                dataDeNascimento, 
                cpf, 
                genero, 
                telefone, 
                senha
            }

            return Cliente.push(dadosUsuario);
        }else{
            res.render("cadastro", { errors: listaDeErro.mapped(), old: req.body });
        }
    }
}