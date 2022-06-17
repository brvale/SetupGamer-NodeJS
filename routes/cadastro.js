const express = require('express');
const router = express.Router();

const validarCampos = require("../middleware/campoValidacao")
const cadastroController = require("../controllers/validacaoController");

router.post('/cadastro', validarCampos, cadastroController.register);

module.exports = router;