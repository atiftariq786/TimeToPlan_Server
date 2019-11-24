const mongoose = require("mongoose");
/*
mongoose.connect('mongodb://localhost:27017/planing_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

*/

const Schema = mongoose.Schema;

const Story = new Schema({
    //title: { type: String, required: true },
    title: String,
    story: String,
    author: String
    
});

module.exports = mongoose.model("PostStory", Story);
/*
let temp = new Planing ({
    title: "MotoGP",
    story: "Rain",
    author: "not avialable",
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
*/


//module.exports = Planing;
