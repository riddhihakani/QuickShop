var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    user : {
        id :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username : String
    }
});

module.exports = mongoose.model('Order', categorySchema);