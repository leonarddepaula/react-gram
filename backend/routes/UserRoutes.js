const express = require("express");
const router = express.Router();

// controller
const {
  register,
  login,
  getCurrentUser,
  update,
} = require("../controllers/UserController");

// middlewares
const validate = require("../middlewares/handlerValidation");
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");
const { imageUload } = require("../middlewares/imageUpload");

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUload.single("profileImage"),
  update
);

module.exports = router;
