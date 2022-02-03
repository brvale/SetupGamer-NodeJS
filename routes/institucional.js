const express = require('express');
const router = express.Router();

const institucionalController = require('../controllers/institucionalController')

router.get("/politica-privacidade", institucionalController.politicaPrivacidade);

router.get("/termos-servico", institucionalController.termosServico);

router.get("/formas-pagamento-envio", institucionalController.formaPagamentoEnvio);

router.get("/garantia-troca-devolucao", institucionalController.garantiaTrocaDevolucao);

module.exports = router;