var express = require("express");
var router  = express.Router();
var User = require("../models/users");

var ctrlUser = require('../controllers/user.controller');

var jwtHelper = require('../config/jwtHelper');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,ctrlUser.UserProfile);







module.exports = router;