const express = require("express");
const bodyParser = require("body-parser");
const { router } = require("./routes");
const { database } = require("./database");

const app = express();

app.use(bodyParser.json());
app.use(router);

database.sync();

app.listen(5000);
