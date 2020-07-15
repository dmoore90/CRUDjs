const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const pageRoutes = require("./routes/routes");
const db = require("./db/connection");
const mysql = require("mysql2");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(pageRoutes);

app.listen(port);
console.log(`listening on port ${port}`);