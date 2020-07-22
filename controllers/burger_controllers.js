// Required depedencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create routes

// Index redirect
router.get('/', function(req, res) {
	res.redirect('/index');
});


// selectAll
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});





// Export 
module.exports = router;