const express = require('express');
const router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index", { title: "SetupGamer" })
});

router.get('/cadastro', function(req, res, next) {
    res.render("cadastro", { title: "Cadastro" })
})

router.get("/monteSeuPc", function(req, res, next) {
    res.render("monteSeuPc", { title: "Monte seu PC" })
});

module.exports = router;