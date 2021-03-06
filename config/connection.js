// Set up database 
var mysql = require('mysql');
var connection;

// JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		port:3306,
		user: 'root',
		password: 'bangbangboomboombus',
		database: 'burgers_db'
	});
};


// Connect database
connection.connect(function(err) {
	if (err) {
		return;
	}
	console.log('You are connected as id ' + connection.threadId + '\n');
});

// export the connection back to orm
module.exports = connection;