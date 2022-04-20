const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.post('/cadastrar-produto', produtoController.register);

module.exports = router;