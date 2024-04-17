const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { router } = require("./routes");
const { DSN } = require("./config");

async function main() {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(router);

    await mongoose.connect(DSN)
    app.listen(5000);
}

main();
