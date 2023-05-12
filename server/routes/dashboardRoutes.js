const express = require('express');
const router = express.Router();
// const { dashboardQueries: query } = require('../queries/Query');
const db = require('../db/dbconfig');

//--------------------------------------------------------------

// /api/dash - DASHBOARD
router.get('/', (req, res) => {
	db.query('SELECT * FROM dashboard', (err, results) => {
		if (!err) {
			res.send(results);
		} else {
			console.log('error man:', err);
		}
	});
});

module.exports = router;
