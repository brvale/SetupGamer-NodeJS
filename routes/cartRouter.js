const express = require('express');
const router = express.Router();

const cartController = require('../controllers/produtoController');

router.get("/carrinhoDeCompra", cartController.listCart);

module.exports = router;