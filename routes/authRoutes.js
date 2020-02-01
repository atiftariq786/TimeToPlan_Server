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



/*
router.post("/register/", function(req,res){
    console.log("server side activate")
    req.body.username
    req.body.password
    User.register(new User({username:req.body.username}),req.body.password, function(err, user){
        if(err){
            console.log(err);
            console.log("Signup failed")
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            console.log("Auth successfull")
            res.redirect("/create-story");
        })
    });
})

*/




//router.get("/stories", PlaningCtrl.getStories)
//router.delete('/story/:id', PlaningCtrl.deleteStory)
//router.put('/story/:id', PlaningCtrl.updateStory)


module.exports = router