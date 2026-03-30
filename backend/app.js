const express = require("express");
const cors = require("cors");

console.log("App file loaded");

const app = express();

app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");  
app.use("/api/v1", routes);

module.exports = app;