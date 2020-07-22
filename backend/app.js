var express = require('express');
var app = express();
var httpMsgs = require('http-msgs');
var jwtLogin = require('jwt-login');
var roles = require('user-groups-roles');
var path = require('path');
var cors = require('cors');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter       = require('./routes/index'),
    usersRouter       = require('./routes/users'),
    productRouter    = require('./routes/products')
    // subcategoryRouter = require('./routes/subcategories'),
    // reviewRouter      = require('./routes/reviews'),
    // productRouter     = require('./routes/products')

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
app.use('/product', productRouter);




module.exports = app;
