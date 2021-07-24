const express = require("express");
const router = express.Router();
// const { dashboardQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

// dashboard    4000/api/dash
router.get("/", async (req, res) => {
    const findAll = await db.query(`SELECT * FROM dashboard`, (err, res) => {
        if (err) {
            console.log("Find all Query error!!!:", err);
        } else {
            console.log(res);
        }
    });

    // query.findAll(res, query.table);
});

module.exports = router;
