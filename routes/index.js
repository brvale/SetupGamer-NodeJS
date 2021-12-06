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
    res.render("lancamento", { title: "Nome da categoria" })
});

router.get("/produto", function(req, res, next) {
    res.render("produto", { title: "Nome do produto" })
});
router.get("/sobrenos", function(req, res, next) {
    res.render("Sobrenos", { title: "A SetupGamer" })
});

router.get("/contato", function(req, res, next) {
    res.render("contato", { title: "Fale conosco" })
});

module.exports = router;