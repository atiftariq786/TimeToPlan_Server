const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Goal = new Schema({
    //title: { type: String, required: true },
    title: String,
    link: String,
    description: String
    
});

module.exports = mongoose.model("PostGoal", Goal);

