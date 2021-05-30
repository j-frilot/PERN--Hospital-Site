require("dotenv").config();
const mysql = require("mysql2");

// // create the connection to database
// const conn = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 100
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log("CONNECTION ERROR!! Connection error message: ", err);
    }
    console.log(
        "Oh yea, our connection is established!: ",
        connection.threadId
    );
});

module.exports = pool;
