const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Story = new Schema({
    
    userId: String,
    title: String,
    story: String,
    profileImage: String,
    backgroundImage: String,
    author: String
});

module.exports = mongoose.model("PostStory", Story);
