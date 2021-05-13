const express = require("express");
const router = express.Router();
const { contactQueries: query } = require("../queries/Query");

// contact-us    ${port}/api/contact-us
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

// ${port}/api/contact-us/send-message
router.post("/send-message", (req, res) => {
    query.messageus(req, res);
});

module.exports = router;
