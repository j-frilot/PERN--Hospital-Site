const express = require('express');
const router = express.Router();
// const { covidQueries: query } = require('../queries/Query');
const db = require('../db/dbconfig');

//--------------------------------------------------------------

// covid    ${port}/api/covid
router.get('/', (req, res) => {
	db.query('SELECT * FROM covid', (err, results) => {
		if (!err) {
			res.send(results);
		} else {
			console.log('error man:', err);
		}
	});
});

module.exports = router;
