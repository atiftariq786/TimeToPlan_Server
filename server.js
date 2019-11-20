const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my_database");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
