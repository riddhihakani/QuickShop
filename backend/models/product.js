var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

    sizes: [],
    name: String,
    brand: String,
    price : String,
    quantity: Number,
    image: String,
    description : String,
    supplier: String,
    subcategory: String,
    postdate: { type:Date, default: Date.now },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

module.exports = mongoose.model('Products', productSchema);