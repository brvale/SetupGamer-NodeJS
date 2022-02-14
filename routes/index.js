const express = require('express');
const router = express.Router();

const institucionalRouter = require('./institucional');
const checkoutRouter = require('./checkout');

router.get("/", function(req, res, next) {
    res.render("index", { title: "SetupGamer" })
});

router.get('/cadastro', function(req, res, next) {
    res.render("cadastro", { title: "Cadastro | SetupGamer" })
});

router.get("/monte-seu-pc", function(req, res, next) {
    res.render("monteSeuPc", { title: "Monte seu PC | SetupGamer" })
});

router.get("/categorias", function(req, res, next) {
    res.render("categorias", { title: "Categorias | SetupGamer" })
});

router.get("/produto", function(req, res, next) {
    res.render("produto", { title: "Nome do produto" })
});

router.get("/sobre-nos", function(req, res, next) {
    res.render("sobreNos", { title: "A SetupGamer" })
});

router.get("/contato", function(req, res, next) {
    res.render("contato", { title: "Fale conosco | SetupGamer" })
});

router.get("/carrinhoDeCompra", (req, res, next) => {
    res.render("carrinhoDeCompra", { title: "Carrinho de Compra | SetupGamer"})
})

router.use("/institucional", institucionalRouter);
router.use("/checkout", checkoutRouter);

module.exports = router;