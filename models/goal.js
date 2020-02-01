const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Goal = new Schema({
    //title: { type: String, required: true },
    userId: String,
    title: String,
    link: String,
    description: String,
    completeGoal: Boolean
    
});

module.exports = mongoose.model("PostGoal", Goal);

