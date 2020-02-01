const express               = require("express"); //done
const mongoose              = require("mongoose"); //done
const passport              = require("passport");//done
const bodyParser            = require("body-parser");//done
const LocalStrategy         = require("passport-local");//done
//const passportLocalMongoose = require("passport-local-mongoose");//done
const session = require("express-session");// new
const cookieParser = require("cookie-parser");//new

const cors = require("cors");
const User = require("./models/user");
const planingRoutes = require("./routes/planing-Routes");
const authRoutes = require("./routes/authRoutes");
const middlewareAuth = require("./routes/utils");


const app = express(); //done
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
}));

/*
// enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true),
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
*/



app.get('/', (req, res) => {
    res.send('Hello World!')
})
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
/*
app.use(require("express-session")({
    secret: " World famous hiking",
    resave: false,
    saveUninitialized:false  
}));
*/

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Define middleware here
//app.use(express.urlencoded({ extended: true }));
//app.use(cors());
//app.use(express.json());

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
