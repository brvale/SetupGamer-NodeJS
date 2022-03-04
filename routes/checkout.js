const express = require('express');
const router = express.Router();

router.get('/identificacao', function(req, res, next) {
    res.render("identificacao", { title: "Identificação" })
});

router.get('/endereco', function(req, res, next) {
    res.render("endereco", { title: "Endereço de entrega" })
});

router.get('/frete', function(req, res, next) {
    res.render("frete", { title: "Frete" })
});

router.get('/pagamento', function(req, res, next) {
    res.render("pagamento", { title: "Forma de pagamento" })
});

module.exports = router;