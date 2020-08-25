var express = require("express");
var router  = express.Router();
var Product = require("../models/product");
var Order = require('../models/order');
var User = require('../models/users');
var OrderDetail = require('../models/orderdetail');

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
        User.insertOne({_id: userId}).then((newOrderId) => {
            if(newOrderId>0){
                products.forEach(async(p)=>{
                    let data = await Product.filter({id: p.id}).withFields(['quantity']).get();

                    let inCart = parseInt(p.incart);

                    
                    if (data.quantity > 0) {
                        data.quantity = data.quantity - inCart;

                        if (data.quantity < 0) {
                            data.quantity = 0;
                        }

                    } else {
                        data.quantity = 0;
                    }
                    
                    OrderDetail.insertOne({
                        order_id: newOrderId,
                        product_id: p.id,
                        quantity: inCart
                    }).then(newId => {
                    database.table('products')
                        .filter({id: p.id})
                        .updateOne({
                            quantity: data.quantity
                        }).then(successNum => {
                    }).catch(err => console.log(err));
                }).catch(err => console.log(err));
           

                });
            }else {
                res.json({message: 'New order failed while adding order details', success: false});
            }
            res.json({
                message: `Order successfully placed with order id ${newOrderId}`,
                success: true,
                order_id: newOrderId,
                products: products
            })
        }).catch(err => res.json(err));      
    } else {
        res.json({message: 'New order failed', success: false});
    } 
});

router.post('/payment', (req, res) => {
    setTimeout(() => {
        res.status(200).json({success: true});
    }, 3000)
});




module.exports = router;