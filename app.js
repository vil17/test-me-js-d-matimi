// app.js
const app = require("./src/server/api");


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
//module.exports = app;