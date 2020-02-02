const User = require("../models/user");
const passport = require("passport");

userSignUp = (req,res) => {
    console.log("server side signup activate")
    req.body.username
    req.body.password
    User.register(new User({username:req.body.username}),req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.status(404).json({
                success: false,
                message: 'User SignedUp Failed',
            })
        }
        passport.authenticate("local")(req,res,function(){
            
            console.log("Auth successfull")
            return res.status(201).json({
                success: true,
                message: user.username,
            })
        })
    });
}

userLogin = (req, res, next) => {

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
};

userLogout = (req,res) => {

    req.logout();
    console.log("server side logout activate")
    return res.status(201).json({ 
        success: true, 
        message: 'User logout',
    })
    
}

module.exports ={
    userSignUp,
    userLogin,
    userLogout,
}
