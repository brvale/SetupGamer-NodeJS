const { check, validationResult, body } = require("express-validator");
const fs = require("fs");

const validarCampos = [
    body('nome')
        .notEmpty().withMessage("Deve preencher o campo nome").bail()
        .isString().withMessage("Apenas caracteres letras"),
    body('sobrenome')
        .notEmpty().withMessage("Deve preencher o campo sobrenome").bail()
        .isString().withMessage("Apenas caracteres letras"),
    body('email')
        .notEmpty().withMessage("Deve preencher o campo email").bail()
        .isEmail().withMessage("Deve preencher com um email válido"),
        /*body("email").custom((email => {
            let usuario = JSON.parse(fs.readFileSync())
        }))*/
    body('dataDeNascimento')
        .notEmpty().withMessage("Deve preencher o campo data de nascimento").bail()
        .isDate().withMessage("Deve preencher com números"),
    body('identificadorFiscal')
        .notEmpty().withMessage("Deve preencher o campo cpf").bail()
        .isNumeric().withMessage("Deve preencher com números"),
    body('telefone')
        .notEmpty().withMessage("Deve preencher o campo telefone").bail()
        .isNumeric().withMessage("Deve preencher com números"), 
    body('senha')
        .notEmpty().withMessage("Deve preencher o campo senha").bail()
        .isString().withMessage("Deve preencher com letras e números")
        .isLength({ min: 6, max: 10 }).withMessage("Esse campo deve possuir no minimo 10 caracteres")
]

module.exports = validarCampos;

