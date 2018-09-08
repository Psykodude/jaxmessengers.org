var express = require('express');
var app = express();


//set statics
app.use(express.static('www'));

//view engine
app.set('view engine', 'jade');
app.set('jade', './jade');

//routes


var index = require('./routes/index.js');
app.use('/',index);


module.exports = app;

