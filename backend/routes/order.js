var express = require("express");
var router  = express.Router();
var Product = require("../models/product");
var Order = require('../models/order');
var User = require('../models/users');

router.get('/',function(req, res, next){
    Order.find({},function(err, allOrders){
        if(err){
            console.log(err);
        }else{
            res.json(allOrders);
        }
    })
});

router.get('/:id',function(req, res, next){
    Order.findById(req.params.id,function(err, allOrders){
        if(err){
            console.log(err);
        }else{
            res.json(allOrders);
        }
    });
});


router.post('/new',function(req, res, next){
    var userId = req.params.id;
    var product = JSON.parse(req.body);
    console.log(userId);
    console.log(products);
    if(userId !== null && userId > 0){
        User.insertOne({_id: userId})      
    }   
});

router.post('/payment', (req, res) => {
    setTimeout(() => {
        res.status(200).json({success: true});
    }, 3000)
});




module.exports = router;