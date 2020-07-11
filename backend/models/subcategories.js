var mongoose = require('mongoose');

var subcategorySchema = new mongoose.Schema({
    category:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Category'
        }
    ],
    name: String,
});

module.exports = mongoose.model('subCategory', subcategorySchema);