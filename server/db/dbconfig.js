// get the client
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.NAME,
});

// simple query
connection.query('SELECT * FROM `dashboard`', function (err) {
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
