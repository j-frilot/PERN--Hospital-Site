const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 4000;

// original
router.use('/physicians', require('./routes/physicianRoutes'));
router.use('/appointments', require('./routes/appointmentRoutes'));
router.use('/dash', require('./routes/dashboardRoutes'));
router.use('/covid', require('./routes/covidRoutes'));
router.use('/contact-us', require('./routes/contactRoutes'));

module.exports = router;
