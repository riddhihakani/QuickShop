var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

    _id:Number,
    sizes: [],
    name: String,
    brand: String,
    price : String,
    quantity: Number,
    image: String,
    description : String,
    supplier: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }

    ],
    subcategory: String,
    postdate: { type:Date, default: Date.now },
    category: String,
   
});

module.exports = mongoose.model('Product', productSchema);