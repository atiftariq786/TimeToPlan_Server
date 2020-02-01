


isLoggedIn = (req, res, next) => { // Need to add calling from get method 

    console.log(req.isAuthenticated);
    if(req.isAuthenticated()){
        return next();
    }
    return res.status(403).json({
       
        message: "Permission Denied",
    }) 
}

module.exports ={
    isLoggedIn,
}