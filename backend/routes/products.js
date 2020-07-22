var express = require("express");
var router  = express.Router();
var Product = require("../models/product");
//var middleware = require("../middleware");

router.get('/',(req,res) => {

    Product.find({},(err,allProducts) => {
        if(err){
            console.log(err);
        } else{
            res.json(allProducts);
        }
    });
});

//insert new categry
// router.post('/post',(req,res) =>{
//     let newCategory = new Category({
//         name:req.body.name
//     });
//     newCategory.save((err, newCategory) => {
//         if(err){
//             res.json(err);
//         }else{
//             console.log(newCategory);
//             res.json({msg: 'New Category Added successfully'});
//         }
//     });
// });


//show form to create new campground
// router.get('/new',(req,res) => {

// });


//get particular category
// router.get('/:id',(req,res) => {
//     Category.findById(req.params.id).exec((err, foundCategory) => {
//         if(err){
//             console.log(err);
//         }else{
            
//             res.json(foundCategory);
//         }
//     });
// });

//update existing category
// router.put('/:id',(req,res) =>{
//     Category.findByIdAndUpdate(req.params.id,{
//         $set:{
//             name:req.body.name
//         },
//         function(err, result) {
//             if(err){
//                 console.log(err);
//                 res.json(err);
//             }else{
//                 res.json(result);
//             }
            
//         }
//     });
// });


//delete a category
// router.delete('/:id',(req,res) =>{
//     Category.findByIdAndRemove(req.params.id,(err,result) =>{
//         if(err){
//             console.log(err);
//             res.json(err);
//         }else{
//             res.json(result)
//         }
//     });
// });











module.exports = router;