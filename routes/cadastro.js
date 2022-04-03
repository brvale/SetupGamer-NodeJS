const express = require('express');
const router = express.Router();

const validarCampos = require("../middleware/campoValidacao")

router.post('/cadastro', validarCampos);
