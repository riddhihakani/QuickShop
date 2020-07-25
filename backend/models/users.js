var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    name : String,
    password: String,
    name: String,
    mobile: String,
    email: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema);