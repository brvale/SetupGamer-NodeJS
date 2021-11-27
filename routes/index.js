const express = require('express');
const router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index")
});

router.get('/cadastrar', function(req, res, next) {
    res.render("cadastro", { title: "cadastro" })
})

router.get("/monteSeuPc", function(req, res, next) {
    res.render("monteSeuPc")
});

module.exports = router;