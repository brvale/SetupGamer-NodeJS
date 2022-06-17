const { Cliente } = require('../database/models');
const bcrypt = require('bcrypt');

let loginMethod = {
    signIn: async (req, res) => {
        let { email, senha } = req.body;

        let usuario = await Cliente.findOne({
            where: {
                email: email
            }
        });

        if(!usuario){
            return res.redirect("/#modal");
        }

        if(bcrypt.compareSync(senha, usuario.senha)){
            req.session.usuario = usuario;
            res.cookie("email", usuario, { maxAge: 500000})
            res.redirect('/')

        }else{
            res.redirect("/#modal");
        }

        console.log(usuario);

    }
}

module.exports = loginMethod;
