var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    name : String,
    password: String,
    mobile: String,
    email: {
        type:String,
        unique : true
    },
       
});




module.exports = mongoose.model('User',UserSchema);