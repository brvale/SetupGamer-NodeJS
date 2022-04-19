const express = require('express');
const router = express.Router();

const institucionalRouter = require('./institucional');
const checkoutRouter = require('./checkout');
const cadastroRouter = require("./cadastro");
const loginRouter = require("./login");

router.get("/", function(req, res, next) {
    res.render("index", { title: "SetupGamer" })
});

router.get('/cadastro', function(req, res, next) {
    res.render("cadastro", { title: "Cadastro | SetupGamer" })
});

//router.post('/cadastro', cadastroController.register);

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
});

router.get("/cadastrar-produto", (req, res, next) => {
    res.render("cadastroProduto", {title: "Cadastrar Produto | SetupGamer"})
});

router.use(loginRouter); //está dizendo que todas as rotas podem acessar a rota do arquivo loginRouter
router.use(cadastroRouter);
router.use("/institucional", institucionalRouter);
router.use("/checkout", checkoutRouter);

module.exports = router;