const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Story = new Schema({
    
    userId: String,
    title: String,
    story: String,
    profileImage: {
        type: String,
        trim: true,
        default: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450"
    },
    backgroundImage: {
        type: String,
        trim: true,
        default: "https://i.dailymail.co.uk/i/pix/2016/01/08/16/2FEAED4C00000578-3390644-image-a-123_1452271847579.jpg"
    },
    author: String
});

module.exports = mongoose.model("PostStory", Story);
