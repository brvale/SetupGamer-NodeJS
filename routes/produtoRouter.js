const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.post('/cadastrar-produto', produtoController.register);

router.get("/categorias", produtoController.list);

router.get("/carrinhoDeCompra", produtoController.listCart);

module.exports = router;