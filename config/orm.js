// Import MySQL connection from connection.js
var connection = require('../config/connection.js');



// Create the ORM
var orm = {
	
	selectAll: function(tableInput, cb) {
		
		//build query  
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		
		//connect and run query
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},


	
};

// Export ORM 
module.exports = orm;