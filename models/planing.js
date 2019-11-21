const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planingSchema = new Schema({
    title: { type: String, required: true },
    story: String,
    link: String
});

const Planing = mongoose.model("Planing", planingSchema);

module.exports = Planing;
