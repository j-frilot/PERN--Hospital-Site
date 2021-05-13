const express = require("express");
const router = express.Router();
const { dashboardQueries: query } = require("../queries/Query");

// dashboard    4000/api/dash
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
