const express = require('express');
const router = express.Router();

const loginController = require("../controllers/loginController");

router.post('/login', loginController.signIn);
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;