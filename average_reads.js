//main requirements
const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//module requirements
const routes = require("./lib/routing/routeIndex.js");
const dbConnection = require("./lib/dbConnection.js");

//set up express options
const app = express();
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static resources
app.use(express.static(__dirname + "/public"));

//set up routing
app.use("/", routes);

//start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
