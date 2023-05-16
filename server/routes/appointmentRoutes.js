const express = require('express');
const router = express.Router();
const db = require('../db/dbconfig');

// appointments    ${port}/api/appointments
router.get('/', (req, res) => {
	db.query('SELECT * FROM appointments', (err, results) => {
		if (!err) {
			res.send(results);
		} else {
			console.log('error man:', err);
		}
	});
});

// show appointments in desc order
// /appointments/apptdate
router.get('/apptdate', async (req, res) => {
	await db.query(`SELECT appointment_date FROM appointments`);
	res.json(apptDate.rows);
	if (err) {
		console.error(err.message);
	}
});

// appointments
router.post('/makeAppointment', (req, res) => {
	console.log('Line 29:', req.body);

	const patient_first_name = req.body.patient_first_name;
	const patient_last_name = req.body.patient_last_name;
	const physicians_id = req.body.physicians_id;
	const appointment_date = req.body.appointment_date;
	const insurance = req.body.insurance;
	const telephone = req.body.telephone;
	const comments = req.body.comments;
	const height = req.body.height;
	const weight = req.body.weight;

	db.query(
		`INSERT INTO appointments (patient_first_name, patient_last_name, physicians_id, appointment_date, insurance, telephone, comments, height, weight) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		[
			patient_first_name,
			patient_last_name,
			physicians_id,
			appointment_date,
			insurance,
			telephone,
			comments,
			height,
			weight,
		],
		(err, res) => {
			if (err) {
				console.log('POST Request ERROR!!!:', err);
			} else {
				console.log('POST Request SUCCESS!:', res);
			}
		}
	);
});

module.exports = router;
