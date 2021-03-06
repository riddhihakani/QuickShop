var mongoose = require("mongoose");
 
var reviewSchema = new mongoose.Schema({
    text: String,
    customer: {
        id: {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'User'

        },
        username:String
    }
});
 
module.exports = mongoose.model('Review', reviewSchema);