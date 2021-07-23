const pool = require("../db/dbconfig");
const physicianQueries = require("./physicianQueries");
const appoinmentQueries = require("./appointmentQueries");
const covidQueries = require("./covidQueries");
const dashboardQueries = require("./dashboardQueries");

const commonQueries = {
    findAll: (res, table) => {
        pool.execute(`SELECT * FROM ${table}`, (error, results) => {
            if (!error) {
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                } else {
                    res.json(results);
                }
            } else {
                console.log("Query Error", error);
            }
        });
    }
};

module.exports = commonQueries;
