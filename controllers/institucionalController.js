module.exports = {
    politicaPrivacidade(req, res, next) {
        res.render('institucional', {
            title: "Política de Privacidade | SetupGamer",
            bodyTitle: "Política de Privacidade",
            text: "Durante todo tempo de navegação e compra em nosso site, nos preocupamos e temos total compromisso com a segurança e privacidade dos dados de nossos Clientes. Todo processo de pagamento é feito diretamente dentro de ambiente seguro dos bancos e das operadoras de crédito, asseguramos ainda que, todos os dados cadastrais de nossos Clientes não serão vendidos, trocados, divulgados ou repassados para terceiros, exceto quando necessários para o processo de entrega, devolução, garantia, crédito e cobrança ou para participação de algumas campanhas promocionais. Você só receberá emails, campanhas ou promoções da SetupGamer, se previamente autorizar em nosso site. Para sua maior segurança, recomendamos que em nenhuma hipótese, divulgue seu login e senha para terceiros."
        });
    },

    termosServico(req, res, next) {
        res.render('institucional', {
            title: "Termos de Serviço | SetupGamer",
            bodyTitle: "Termos de Serviço",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        });
    },

    formaPagamentoEnvio(req, res, next) {
        res.render('institucional', {
            title: "Formas de Pagamento e envio | SetupGamer",
            bodyTitle: "Formas de Pagamento e envio",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        });
    },

    garantiaTrocaDevolucao(req, res, next) {
        res.render('institucional', {
            title: "Garantia, troca e Devolução | SetupGamer",
            bodyTitle: "Garantia, troca e Devolução",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        });
    }
}