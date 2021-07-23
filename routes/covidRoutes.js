const express = require("express");
const router = express.Router();
const { covidQueries: query } = require("../queries/Query");

// covid    ${port}/api/covid
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
