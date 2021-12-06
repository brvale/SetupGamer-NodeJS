const express = require('express');
const router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index", { title: "SetupGamer" })
});

router.get('/cadastro', function(req, res, next) {
    res.render("cadastro", { title: "Cadastro" })
});

router.get("/monteSeuPc", function(req, res, next) {
    res.render("monteSeuPc", { title: "Monte seu PC" })
});

router.get("/lancamento", function(req, res, next) {
    res.render("lancamento")
});

router.get("/produto", function(req, res, next) {
    res.render("produto", { title: "Nome do produto" })
});
router.get("/sobrenos", function(req, res, next) {
    res.render("Sobrenos", { title: "A SetupGamer" })
});

module.exports = router;