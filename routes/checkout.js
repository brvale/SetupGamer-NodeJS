const express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/checkoutController')

router.get('/identificacao', function(req, res, next) {
    res.render("identificacao", { title: "Identificação" })
});

router.get('/endereco', checkoutController.endereco);
router.post('/endereco', checkoutController.endereco);
router.post('/salvar-endereco', checkoutController.salvarEndereco);

router.get('/frete', function(req, res, next) {
    res.render("frete", { title: "Frete" })
});

router.get('/pagamento', function(req, res, next) {
    res.render("pagamento", { title: "Forma de pagamento" })
});

module.exports = router;