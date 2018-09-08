var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');





//set middleware
router.use(bodyparser());



router.get('/', function(req,res,next){
    res.render('./index.jade');
})

module.exports = router;