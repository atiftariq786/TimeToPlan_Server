const express       = require("express"); 
const mongoose      = require("mongoose"); 
const passport      = require("passport");
const bodyParser    = require("body-parser");
const LocalStrategy = require("passport-local");
const session       = require("express-session");
const cookieParser  = require("cookie-parser");
const cors          = require("cors");

const User = require("./models/user");
const planingRoutes = require("./routes/planingRoutes");
const authRoutes = require("./routes/authRoutes");
const middlewareAuth = require("./routes/utils");


const app = express(); 
const PORT = process.env.PORT || 3001;

//Cors used to connect middlware that can be enable variouse options that are credential and origin.
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
}));

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        expires: 2592000000,
        httpOnly: false,
        encode:String,
    }
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add routes, both API and view
app.use("/api",middlewareAuth.isLoggedIn , planingRoutes);
app.use("/auth", authRoutes);

// Connect to the Mongo DB
mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/planing_database");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
