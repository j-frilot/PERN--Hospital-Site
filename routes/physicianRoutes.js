const express = require("express");
const router = express.Router();
const { physicianQueries: query } = require("../queries/Query");

//    3000/api/physicians

// all of the physicians  :3000/api/physicians
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

// find by id  ${PORT}api/physicians/5
router.get("/:id", (req, res) => {
    query.findById(res, query.table, req.params.id);
});

// filter names  ${PORT/api/physicians/filter/'letters'
router.get("/filter/:str", (req, res) => {
    query.filterName(res, req.params.str);
});
module.exports = router;
