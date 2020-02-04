const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Goal = new Schema({
    
    userId: String,
    title: String,
    link: {
        type: String,
        trim: true,
        default: "https://previews.123rf.com/images/dogfella/dogfella1512/dogfella151200088/48938356-dream-big-set-goal-take-action-handwriting-on-notebook-with-light-bulbs.jpg"
    
    },
    description: String,
    completeGoal: Boolean
    
});

module.exports = mongoose.model("PostGoal", Goal);

