const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { router } = require("./routes");
const { DSN } = require("./database");

async function main() {
    const app = express();

    app.use(bodyParser.json());
    app.use(router);

    await mongoose.connect(DSN)
    app.listen(5000);
}

main();
