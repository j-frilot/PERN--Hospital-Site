const express = require('express');
const router = express.Router();
// const { contactQueries: query } = require('../queries/Query');
const db = require('../db/dbconfig');

//--------------------------------------------------------------

// contact-us    ${port}/api/contact-us
router.get('/', (req, res) => {
	db.query('SELECT * FROM contact', (err, results) => {
		if (!err) {
			res.send(results);
		} else {
			console.log('error man:', err);
		}
	});
});

//--------------------------------------------------------------

// ${port}/api/contact-us/send-message
router.post('/send-message', async (req, res) => {
	const person_first_name = req.body.person_first_name;
	const person_last_name = req.body.person_last_name;
	const email = req.body.email;
	const message = req.body.message;
	try {
		const messages = await db.query(
			`INSERT INTO contact (person_first_name, person_last_name, email, message) VALUES (?, ?, ?, ?)`,
			[person_first_name, person_last_name, email, message]
		);
	} catch (err) {
		console.error(err.message);
	}

	query.messages(req, res);
});

module.exports = router;
