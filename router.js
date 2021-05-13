const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.get("/", (req, res) => {
    res.json({
        "All Physicians": `http://localhost:${PORT}/api/physicians/`,
        "All Appointments": `http://localhost:${PORT}/api/appointments/`,
        Dashboard: `http://localhost:${PORT}/api/dash/`,
        "All Covid Banner": `http://localhost:${PORT}/api/covid/`
    });
});

// original
router.use("/physicians", require("./routes/physicianRoutes"));
router.use("/appointments", require("./routes/appointmentRoutes"));
router.use("/dash", require("./routes/dashboardRoutes"));
router.use("/covid", require("./routes/covidRoutes"));
router.use("/contact-us", require("./routes/contactRoutes"));

module.exports = router;
