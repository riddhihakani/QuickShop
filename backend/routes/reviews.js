var express = require("express");
var router  = express.Router({mergeParams: true});
var Product = require("../models/product");
var Review = require("../models/review");


//Review New
router.get('/new',function(req, res, next){
    // find product by id
    console.log(req.params.id);
    Product.findById(req.params.id, function(err, product){
        if(err){
            console.log(err);
        } else {
             res.json(product);
        }
    })
});

//Reviews Create
router.post('/',function(req, res, next){
   //lookup campground using ID
   Product.findById(req.params.id, function(err, product){
       if(err){
           console.log(err);
        //    res.redirect("/campgrounds");
       } else {
        Review.create(req.body.comment, function(err, review){
           if(err){
             
               console.log(err);
           } else {
               //add username and id to comment
               review.author.id = req.user._id;
               review.author.username = req.user.username;
               //save comment
               review.save();
               product.comments.push(review);
               product.save();
               console.log(review);
            //    res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
});

// COMMENT EDIT ROUTE
router.get("/:review_id/edit", function(req, res, next){
   Review.findById(req.params.review_id, function(err, foundReview){
      if(err){
          console.log(err);
        //   res.redirect("back");
      } else {
        res.json({product_id: req.params.id, review: foundReview});
      }
   });
});

// COMMENT UPDATE
router.put('/:review_id',function(req, res, next){
   Review.findByIdAndUpdate(req.params.review_id, req.body.review, function(err, updatedReview){
      if(err){
          console.log(err);
        //   res.redirect("back");
      } else {
        //   res.redirect("/campgrounds/" + req.params.id );
      }
   });
});

// COMMENT DESTROY ROUTE
router.delete("/:review_id",function(req, res, next){
    //findByIdAndRemove
    Review.findByIdAndRemove(req.params.review_id, function(err){
       if(err){
           console.log(err);
        //    res.redirect("back");
       } else {
        //    req.flash("success","Comment deleted!");
        //    res.redirect("/campgrounds/" + req.params.id);
       }
    });
});

module.exports = router;