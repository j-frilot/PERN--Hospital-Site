const express = require('express');
const router = express.Router();
// const { physicianQueries: query } = require('../queries/Query');
const db = require('../db/dbconfig');

//--------------------------------------------------------------

router.get('/', (req, res) => {
	db.query('SELECT * FROM physicians', (err, results) => {
		if (!err) {
			res.send(results);
		} else {
			console.log('error man:', err);
		}
	});
});

//--------------------------------------------------------------

// /api/physicians/:id - PHYSICIAN ID
router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.query(
		`SELECT * FROM physicians WHERE physicians_id = ?`,
		[id],
		(err, results) => {
			if (err) {
				console.log('GET Request ERROR!!!:', err);
			} else {
				console.log('GET Request SUCCESS!:', results[0]);
				res.send(results[0]);
			}
		}
	);
});

//--------------------------------------------------------------

// /api/physicians/filter/'letters' - FILTER PHYSICIANS
router.get('/filter/:str', async (req, res) => {
	try {
		const filter = await db.query(
			`SELECT *  FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE CONCAT('%', ? , '%'))`,
			[str, str]
		);
		res.json(filter.rows);
	} catch (err) {
		console.error(err.message);
	}

	// query.filterName(res, req.params.str);
});

// `SELECT *  FROM physicians WHERE first_name LIKE CONCAT('%',?,'%')`,
// SELECT first_name, last_name FROM physicians WHERE (first_name LIKE '%w%') OR (last_name LIKE '%w%')
// `SELECT first_name, last_name FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE // CONCAT('%', ? , '%'))`,

module.exports = router;
