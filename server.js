// Dependencies
var express = require('express');

// PORT
var PORT = process.env.PORT || 3000;

// Express app.
var app = express();
app.use(express.static(__dirname + '/public'));



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