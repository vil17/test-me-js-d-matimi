// app.js
const app = require("./src/server/api");

//const $ = require('jquery');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
module.exports = app;