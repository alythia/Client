"use strict";

const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

console.log("db synced");
app.listen(PORT, () =>
  console.log(`studiously serving silly sounds on port ${PORT}`)
);

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", require("./api.js")); // include our routes!

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});
