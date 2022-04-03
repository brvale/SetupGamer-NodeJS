const { check } = require("express-validator");

const validarCampos = [
    check(nome)
        .notEmpty().withMessage("Deve preencher o nome").bail()
        .isString().withMessage("Apenas caracteres letras"),
    check(sobrenome)
        .notEmpty().withMessage("Deve preencher o sobrenome").bail()
        .isString().withMessage("Apenas caracteres letras"),
    check(email)
        .notEmpty().withMessage("Deve preencher o email").bail()
        .isEmail().withMessage("Deve preencher com um email válido"),
    check(dataDeNascimento)
        .notEmpty().withMessage("Deve preencher a data de nascimento").bail()
        .isNumeric().withMessage("Deve preencher com números"),
    check(genero)
        .notEmpty().withMessage("Deve preencher o genero").bail()
        .isString().withMessage("Deve preencher com caracteres"),
    check(cpf)
        .notEmpty().withMessage("Deve preencher o cpf").bail()
        .isNumeric().withMessage("Deve preencher com números"),
    check(telefone)
        .notEmpty().withMessage("Deve preencher o telefone").bail()
        .isNumeric().withMessage("Deve preencher com números"),
    check(senha)
        .notEmpty().withMessage("Deve preencher o telefone").bail()
        .isString().withMessage("Deve preencher com letras e números")
]

module.exports = validarCampos;