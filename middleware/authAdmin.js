const {Cliente} = require('../database/models');

module.exports = {
  isAuthorized: (req, res, next) => {
    let usuario = req.session.usuario;

    if(usuario.admin) {
      return next()
    } else {
      var err = new Error('Usuario não autorizado');
      err.status = 401;
      res.redirect('/', err)
    }
  }
}