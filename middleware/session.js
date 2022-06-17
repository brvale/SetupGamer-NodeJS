module.exports = function (req, res, next ) {
    /*req.session.usuario = {
        id: 1
    }*/
    
    if(req.session.usuario){
        return next()
        
    } 

    return res.redirect('/#modal')
};