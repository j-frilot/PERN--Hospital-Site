const db = require("../db/dbconfig");

const physicianQueries = {
    table: "physicians",
    findById: (res, table, id) => {
        db.query(
            `SELECT * FROM physicians WHERE physicians_id = ?`,
            [id],
            (err, res) => {
                if (err) {
                    console.log("Find by ID Query error!!!:", err);
                } else {
                    res.json(res);
                }
            }
        );
    },
    table: "physicians",
    filterName: (res, str) => {
        db.query(
            `SELECT *  FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE CONCAT('%', ? , '%'))`,
            [str, str],
            (err, res) => {
                if (err) {
                    console.log("Filter Names Query error!!!:", err);
                } else {
                    res.json(res);
                }
            }
        );
    }
};
// `SELECT *  FROM physicians WHERE first_name LIKE CONCAT('%',?,'%')`,
// SELECT first_name, last_name FROM physicians WHERE (first_name LIKE '%w%') OR (last_name LIKE '%w%')
// `SELECT first_name, last_name FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE // CONCAT('%', ? , '%'))`,
module.exports = physicianQueries;
