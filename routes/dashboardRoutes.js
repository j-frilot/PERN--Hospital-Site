const express = require("express");
const router = express.Router();
// const { dashboardQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

//--------------------------------------------------------------

// /api/dash - DASHBOARD
router.get("/", async (req, res) => {
    try {
        const findAllDash = await db.query(`SELECT * FROM dashboard`);
        res.json(findAllDash.rows);
    } catch (err) {
        console.error(err.message);
    }

    // query.findAll(res, query.table);
});

module.exports = router;
