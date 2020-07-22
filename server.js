// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;


// Handlebars 
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes
var routes = require('./controllers/burger_controllers.js');
app.use('/', routes);

// Initiate listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});