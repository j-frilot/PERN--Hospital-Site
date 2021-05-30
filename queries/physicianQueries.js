const pool = require("../db/dbconfig");

const physicianQueries = {
    table: "physicians",
    findById: (res, table, id) => {
        pool.query(
            `SELECT * FROM physicians WHERE physicians_id = ?`,
            [id],
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
    },
    table: "physicians",
    filterName: (res, str) => {
        pool.query(
            `SELECT *  FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE CONCAT('%', ? , '%'))`,
            [str, str],
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
// `SELECT *  FROM physicians WHERE first_name LIKE CONCAT('%',?,'%')`,
// SELECT first_name, last_name FROM physicians WHERE (first_name LIKE '%w%') OR (last_name LIKE '%w%')
// `SELECT first_name, last_name FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE // CONCAT('%', ? , '%'))`,
module.exports = physicianQueries;
