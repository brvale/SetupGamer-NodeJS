const { Cliente } = require('../database/models')

let loginMethod = {
    signIn: (req, res) => {
        let { email, senha } = req.body;

        let usuario = await Cliente.findAll({
            where: {
                email: email,
                senha: senha
            }
        });

        if(usuario.email === email && usuario.senha === senha){
            res.redirect('/')
        }else{
            console.log("email ou senha invalidos")
        }
    }
}

module.exports = loginMethod;