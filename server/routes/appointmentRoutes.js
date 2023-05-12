const express = require('express');
const router = express.Router();
// const { appointmentQueries: query } = require('../queries/Query');
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
router.post('/makeAppointment', async (req, res) => {
	console.log(req.body);
	await db.query(
		`INSERT INTO appointments (patient_first_name, patient_last_name, physicians_id, appointment_date, insurance, telephone, comments, height, weight) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		[
			req.body.patient_first_name,
			req.body.patient_last_name,
			req.body.physicians_id,
			req.body.appointment_date,
			req.body.insurance,
			req.body.telephone,
			req.body.comments,
			req.body.height,
			req.body.weight,
		],
		(err, res) => {
			if (err) {
				console.log('Make Appointment Query error!!!:', err);
			} else {
				console.log(res);
			}
		}
	);
	if (err) {
		console.error(err.message);
	}

	// query.makeAppointment(req, res);
});

module.exports = router;
