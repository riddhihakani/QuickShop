var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter       = require('./routes/index'),
    usersRouter       = require('./routes/users'),
    categoryRouter    = require('./routes/categories'),
    subcategoryRouter = require('./routes/subcategories'),
    reviewRouter      = require('./routes/reviews'),
    productRouter     = require('./routes/products')

mongoose.connect("mongodb://localhost/Quickshop_app",{useNewUrlParser : true, useUnifiedTopology:true});

mongoose.connection.on('connected',() => {
    console.log('mongodb connected');
});

mongoose.connection.on('error',() => {
    console.log(err);
});

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/category/:id/subcategories', subcategoryRouter);
app.use('/category/:id/subcategories/:id/products', productRouter);
app.use('/category/:id/subcategories/:id/products/:id/reviews', reviewRouter);


module.exports = app;
