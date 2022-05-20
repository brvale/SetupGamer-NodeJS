const express = require('express');
const router = express.Router();

const cartController = require('../controllers/CarrinhoDeCompraController');

router.get("/carrinhoDeCompra", cartController.list);

module.exports = router;