const express = require("express");
const router = express.Router();
// const { covidQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

// covid    ${port}/api/covid
router.get("/", async (req, res) => {
    try {
        const findAll = await db.query(`SELECT * FROM covid`, (err, res) => {
            if (err) {
                console.log("Find all Query error!!!:", err);
            } else {
                console.log(res);
            }
        });
    } catch (err) {
        console.error(err.message);
    }

    // query.findAll(res, query.table);
});

module.exports = router;
