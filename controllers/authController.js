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

userLogin = (req,res) => {
    console.log("server side login activate");
}

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





/*
const User = require("../models/user");




registerUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
        success: false,
        error: 'You must provide a register form data',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user.save()      
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            }) 
        })
}


module.exports = {
    registerUser,
}

*/