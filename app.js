// app.js
const app = require("./src/api");
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});