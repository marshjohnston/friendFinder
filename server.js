var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express(); 

var PORT =  process.env.PORT || 8080

app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json()); 


require('./app/routing/apiroutes')(app);
require('./app/routing/htmlroutes')(app);

app.listen(PORT, function() {
console.log("PORT is running at: " + PORT)
})