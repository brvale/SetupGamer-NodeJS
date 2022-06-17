const express = require('express');
const router = express.Router();
const session = require('../middleware/session');

const checkoutController = require('../controllers/checkoutController')

router.post('/carrinhoDeCompra', checkoutController.salvarProduto )

router.get('/identificacao', function(req, res, next) {
    res.render("identificacao", { title: "Identificação" })
});

router.use(session);

router.get('/endereco', checkoutController.endereco);
router.post('/endereco', checkoutController.endereco);

router.post('/salvar-endereco', checkoutController.salvarEndereco);


router.get('/frete', function(req, res, next) {
    res.render("frete", { title: "Frete" })
});

router.post('/frete', (req, res, next) => {
    req.session.frete = req.body.transporte;
    res.redirect('/checkout/pagamento');
})

router.get('/pagamento', checkoutController.somarTotalPedido);

router.post('/pagamento', checkoutController.pedido);

router.get('/concluido', (req, res, next) => {
    res.render('pedidoConcluido', { title: "pedidoConcluido"});
})



module.exports = router;

