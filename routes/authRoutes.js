const express = require("express");
const AuthController = require("../controllers/authController");
//const User = require("../models/user");
const router = express.Router();
const passport = require("passport");

router.post("/register/", AuthController.userSignUp)

router.post("/login/",function(req, res, next) {

    passport.authenticate("local", function(err, user, info){
        
        if (err) { return next(err); }
        if (!user) { return res.status(404).json({
            success: false,
            message: 'User not available',
        }) }

        req.logIn(user, function(err) {
            if (err) { 
                return next(err); 
            }
            return res.status(201).json({
                success: true,
                message: user.username,
            }) 
        })
    })(req, res, next);
});

router.get("/logout/", AuthController.userLogout)

module.exports = router