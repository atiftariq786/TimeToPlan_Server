const express               = require("express"); //done
const mongoose              = require("mongoose"); //done
const passport              = require("passport");//done
const bodyParser            = require("body-parser");//done
const LocalStrategy         = require("passport-local");//done
const passportLocalMongoose = require("passport-local-mongoose");//done

const cors = require("cors");
const User = require("./models/user");
const planingRoutes = require("./routes/planing-Routes");
const authRoutes = require("./routes/authRoutes");


const app = express(); //done
const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(passport.initialize());
app.use(passport.session());

app.use(require("express-session")({
    secret: " World famous hiking",
    resave: false,
    saveUninitialized:false  
}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Define middleware here
//app.use(express.urlencoded({ extended: true }));
//app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// Add routes, both API and view
app.use("/api", planingRoutes);
app.use("/api", authRoutes);

// Connect to the Mongo DB
mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/planing_database");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
