const express = require("express");
const AuthController = require("../controllers/authController");
const router = express.Router();

router.post("/register/", AuthController.userSignUp);

router.post("/login/", AuthController.userLogin);

router.get("/logout/", AuthController.userLogout);

module.exports = router