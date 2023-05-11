require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	user: 'josh',
	password: 'funk2013',
	database: 'hospital',
	port: 3000,
	connectionLimit: 100,
});

pool.query('SELECT NOW()', (err, res) => {
	console.log('Oh yea, our connection is established!: ');
});

module.exports = pool;
