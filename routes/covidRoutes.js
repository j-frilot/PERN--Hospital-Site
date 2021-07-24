const express = require("express");
const router = express.Router();
// const { covidQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

// covid    ${port}/api/covid
router.get("/", async (req, res) => {
    const findAll = await db.query(`SELECT * FROM covid`, (err, res) => {
        if (err) {
            console.log("Find all Query error!!!:", err);
        } else {
            console.log(res);
        }
    });

    // query.findAll(res, query.table);
});

module.exports = router;
