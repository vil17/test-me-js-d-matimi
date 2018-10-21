// src/api.js
const express = require("express");
const app = express();
const greeting = require("../logic/greeting");
const path = require('path');


app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
})

app.get('/main.js', function (req, res) {
  res.sendFile(path.resolve('dist/main.js'))
})

app.get('/ttt.js', function (req, res) {
  res.sendFile(path.resolve('dist/main.js'))
})

app.get("/greeting/:name", (req, res) => {
	var name = req.params.name;
    var retgreeting = {"greeting":greeting(name)};
    res.status(200).send(retgreeting);
});
module.exports = app;