var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index")
});

router.get("/monteSeuPc", function(req, res, next) {
    res.render("monteSeuPc")
});

module.exports = router;