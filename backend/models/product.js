var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

    sizes: [],
    name: String,
    price : String,
    quantity: Number,
    image: String,
    description : String,
    supplier: String,
    postdate: { type:Date, default: Date.now },
    subcategory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"subCategory"
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