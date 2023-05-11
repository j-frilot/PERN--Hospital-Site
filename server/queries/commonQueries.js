const db = require('../db/dbconfig');
const physicianQueries = require('./physicianQueries');
const appoinmentQueries = require('./appointmentQueries');
const covidQueries = require('./covidQueries');
const dashboardQueries = require('./dashboardQueries');

const commonQueries = {
	findAll: (res, table) => {
		db.query(`SELECT * FROM ${table}`, (err, res) => {
			if (err) {
				console.log('Find all Query error!!!:', err);
			} else {
				console.log(res);
			}
		});
	},
};

module.exports = commonQueries;
