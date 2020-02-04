const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username:{
        type: String,
        trim: true,
        required: "Username is required",
        unique:true
    },
    email:{
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: "Email cannot be blank",
        unique: false
    },
    password: {
        type: String,
        
    },
});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);  