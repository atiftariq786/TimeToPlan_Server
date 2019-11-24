const express = require("express");
const mongoose = require("mongoose");
const planingRoutes = require("./routes/planing-Routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Define middleware here
//app.use(express.urlencoded({ extended: true }));
//app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// Add routes, both API and view
app.use("/api", planingRoutes);

// Connect to the Mongo DB
mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/planing_database");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
