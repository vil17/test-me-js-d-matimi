// src/api.js
const express = require("express");
const app = express();
const greeting = require("../logic/greeting"); 

app.get("/greeting/:name", (req, res) => {
	var name = req.params.name;
    var retgreeting = {"greeting":greeting(name)};
    res.status(200).send(retgreeting);
});
module.exports = app;