var mongoose = require('mongoose');

var orderDetailSchema = new mongoose.Schema({
    order : {
        id :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    
    },
    product:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }
});

module.exports = mongoose.model('OrderDetail',orderDetailSchema);