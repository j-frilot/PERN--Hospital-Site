const conn = require("../db/dbconfig");

const contactQueries = {
    table: "contact",
    messageus: (req, res) => {
        const person_first_name = req.body.person_first_name;
        const person_last_name = req.body.person_last_name;
        const email = req.body.email;
        const message = req.body.message;
        conn.query(
            `INSERT INTO contact (person_first_name, person_last_name, email, message) VALUES (?, ?, ?, ?)`,
            [person_first_name, person_last_name, email, message],
            (error, results) => {
                if (!error) {
                    if (results.length == 1) {
                        res.json(...results);
                    } else {
                        res.json(results);
                    }
                } else {
                    console.log("Query Error", error);
                }
            }
        );
    }
};

module.exports = contactQueries;
