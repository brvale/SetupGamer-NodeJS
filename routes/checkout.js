const express = require('express');
const router = express.Router();
const session = require('../middleware/session');


const { Frete, Tipo_Pagamento, ListaProduto, Pedido } = require('../database/models');

const checkoutController = require('../controllers/checkoutController')

router.post('/carrinhoDeCompra', checkoutController.salvarProduto )

router.get('/identificacao', function(req, res, next) {
    res.render("identificacao", { title: "Identificação" })
});

router.use(session);

router.get('/endereco', checkoutController.endereco);
router.post('/endereco', checkoutController.endereco);

router.post('/salvar-endereco', checkoutController.salvarEndereco);


router.get('/frete', function(req, res, next) {
    res.render("frete", { title: "Frete" })
});

router.post('/frete', (req, res, next) => {
    req.session.frete = req.body.transporte;
    res.redirect('/checkout/pagamento');
})

router.get('/pagamento', async function(req, res, next) {
    const { produtos, frete } = req.session;

    const dadosFrete = await Frete.findOne({ 
        where: { 
            id_frete: frete
        }
    })

    let totalProdutos = 0;

    produtos.forEach(produto => {
        totalProdutos += produto.valor * produto.quantidade;
    })

    const totalGeral = dadosFrete.valor + totalProdutos;
    req.session.totalGeral = totalGeral;

    res.render("pagamento", { title: "Forma de pagamento", totalProdutos, totalGeral, frete: dadosFrete.valor });
});

router.post('/pagamento', async (req, res, next) => {
    req.session.pagamento = req.body.radio;

        console.log(req.session)
    const novoPedido = await Pedido.create({ 
        id_cliente: req.session.usuario.id_cliente,
        id_pagamento: req.session.pagamento,
        id_endereco: req.session.endereco.id_endereco,
        id_frete: req.session.frete,
        valor: req.session.totalGeral
    })

    req.session.produtos.forEach(async produto => {
        const total = produto.valor * produto.quantidade;

        await ListaProduto.create({
            id_pedido: novoPedido.id_pedido,
            id_produto: produto.id_produto,
            quantidade: produto.quantidade,
            valor: total
        }).catch(console.trace)
    })

    res.send('deu certo')
    // res.redirect('/checkout/sucesso');
})

router.get('/sucesso', (req, res, next) => {
    res.render('sucesso');
})



module.exports = router;

