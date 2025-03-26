const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("o nome precisa ter no mínimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail Válido."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no mínimo 5 caracteres.")
      .matches(/[A-Z]/)
      .withMessage("A senha deve conter pelo menos uma letra maiúscula.")
      .matches(/[\W_]/)
      .withMessage("A senha deve conter pelo menos um caractere especial.")
      .matches(/\d/)
      .withMessage("A senha deve conter pelo menos um número."),
    //   .custom((value, { req }) => {
    //     if (value != req.body.password) {
    //       throw new Error("Senha Incorreta");
    //     }
    //     return true;
    //   }),
  ];
};

module.exports = {
  userCreateValidation,
};
