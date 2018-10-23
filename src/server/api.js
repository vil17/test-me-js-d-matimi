// src/api.js
const express = require("express");
const app = express();
const greeting = require("../logic/greeting");
const path = require('path');

app.use(express.static(path.resolve('dist'))); //leyfir manni að hafa js skrána í dist skránni og þurfa ekki að senda JS scripturnar sérstaklega með (sjá drasl hérna niðri)

//app.get('/', function (req, res) {
  res.sendFile('index.html');
})
 //ef etta er runnar js 2x nuna
 /*
app.get('/main.js', function (req, res) {
  res.sendFile(path.resolve('dist/main.js'))
})


app.get('/ttt.js', function (req, res) {
  res.sendFile(path.resolve('dist/TTT.js'))
})
*/
app.get("/greeting/:name", (req, res) => {
	var name = req.params.name;
    var retgreeting = {"greeting":greeting(name)};
    res.status(200).send(retgreeting);
});
module.exports = app;