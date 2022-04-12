const { Cliente } = require('../database/models')

let loginMethod = {
    signIn: async (req, res) => {
        let { email, senha } = req.body;

        let usuario = await Cliente.findOne({
            where: {
                email: email,
                senha: senha
            }
        });

        if(!usuario){
            req.session.usuario = usuario;
            res.redirect('/')
        }else{
            console.log("email ou senha invalidos")
        }
    }
}

module.exports = loginMethod;