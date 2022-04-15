const { Cliente } = require('../database/models')
const bcrypt = require('bcrypt');

let loginMethod = {
    signIn: async (req, res) => {
        let { email, senha } = req.body;

        let usuario = await Cliente.findOne({
            where: {
                email: email,
                senha: senha
            }
        });

        if(usuario){
            req.session.usuario = usuario;
            res.cookie("email", usuario, { maxAge: 500000})
            res.redirect('/')

        }else{
            console.log("email ou senha invalidos")
        }

        

        console.log(usuario);

        /*if(){

        }*/
    }
}

module.exports = loginMethod;
