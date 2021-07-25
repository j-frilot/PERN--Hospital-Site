const express = require("express");
const router = express.Router();
// const { physicianQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

//--------------------------------------------------------------

// /api/physicians - ALL PHYSICIANS
router.get("/", async (req, res) => {
    try {
        const allPhysicians = await db.query("SELECT * FROM physicians");
        res.json(allPhysicians.rows);
    } catch (err) {
        console.error(err.message);
    }

    // query.findAll(res, query.table);
});

//--------------------------------------------------------------

// /api/physicians/:id - PHYSICIAN ID
router.get("/:id", async (req, res) => {
    try {
        const physicianId = await db.query(
            `SELECT * FROM physicians WHERE physicians_id = ?`,
            [id]
        );
        res.json(physicianId.rows);
    } catch (err) {
        console.error(err.message);
    }

    // query.findById(res, query.table, req.params.id);
});

//--------------------------------------------------------------

// /api/physicians/filter/'letters' - FILTER PHYSICIANS
router.get("/filter/:str", async (req, res) => {
    try {
        const filter = await db.query(
            `SELECT *  FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE CONCAT('%', ? , '%'))`,
            [str, str]
        );
        res.json(filter.rows);
    } catch (err) {
        console.error(err.message);
    }

    // query.filterName(res, req.params.str);
});

// `SELECT *  FROM physicians WHERE first_name LIKE CONCAT('%',?,'%')`,
// SELECT first_name, last_name FROM physicians WHERE (first_name LIKE '%w%') OR (last_name LIKE '%w%')
// `SELECT first_name, last_name FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE // CONCAT('%', ? , '%'))`,

module.exports = router;
