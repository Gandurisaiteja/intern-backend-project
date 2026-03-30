require("dotenv").config();

console.log("Server started");

const app = require("./app");
require("./config/db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});