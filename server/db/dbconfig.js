// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
	host: 'host',
	user: 'user',
	database: 'database',
	password: 'PASSWORD',
});

// simple query
connection.query('SELECT * FROM `DASHBOARD`', function (err) {
	if (!err) {
		console.log('The hospital database connection was successful!!');
	}

	if (err) {
		console.log(
			'There was an error connecting to hospital database.:',
			err
		);
	}
});

module.exports = connection;
