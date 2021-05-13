const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const router = require("./router");

app.use(helmet());
app.use(cors());

// Port Environment variable
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!!!!!!!!!!!!!!!!!!!!</h1>");
});

// parse incoming traditional HTML form submits
// app.use(express.urlencoded({ extended: false }));

// parse incoming JSON payloads
// app.use(express.json());

app.use("/api", router);

// app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
