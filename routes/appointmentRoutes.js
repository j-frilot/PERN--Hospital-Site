const express = require("express");
const router = express.Router();
const { appointmentQueries: query } = require("../queries/Query");

// appointments    ${port}/api/appointments
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

// show appointments in desc order
// /appointments/apptdate
router.get("/apptdate", (req, res) => {
    query.apptdate(res, query.table);
});

// appointments
router.post("/makeAppointment", (req, res) => {
    query.makeAppointment(req, res);
});

module.exports = router;
