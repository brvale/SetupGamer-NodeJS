var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index")
});
router.get("/lancamento", function(req, res, next) {
    res.render("lancamento")
});

module.exports = router;