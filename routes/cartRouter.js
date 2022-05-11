const express = require('express');
const router = express.Router();

const cartController = require('../controllers/CarrinhoDeCompraController');

router.get("/carrinhoDeCompra", (req, res, next) => {
    res.render('carrinhoDeCompra', {title: "Carrinho | SetupGamer"})
});

module.exports = router;