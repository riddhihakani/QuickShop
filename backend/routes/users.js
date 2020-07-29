var express = require("express");
var router  = express.Router();
var User = require("../models/users");



router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken,ctrlUser.UserProfile);







module.exports = router;