const express = require("express");
const router = express.Router();

// controller
const { register, login, getCurrentUser } = require("../controllers/UserController");

// middlewares
const validate = require("../middlewares/handlerValidation")
const { userCreateValidation, loginValidation } =  require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser)

module.exports = router;
