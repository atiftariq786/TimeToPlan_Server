const mongoose = require("mongoose");
/*
mongoose.connect('mongodb://localhost:27017/planing_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

*/

const Schema = mongoose.Schema;

const planingSchema = new Schema({
    title: { type: String, required: true },
    story: String,
    link: String,
    daynite: String,
    ground: String
});

const Planing = mongoose.model("MotoGP", planingSchema);

let temp = new Planing ({
    title: "MotoGP",
    story: "Rain",
    link: "not avialable",
    daynite: "sunrise",
    ground: "Lahore"

})
temp.save(function(err, res){
    if(err){
        console.log("Something Wrong");
    }
    else{
        console.log("Planing data saved in Database");
    }
})



module.exports = Planing;
