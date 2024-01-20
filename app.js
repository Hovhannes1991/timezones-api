const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

const router = require("./src/routes/index");
const corsConfig = require("./config/cors-config");

app.use(cors(corsConfig));
app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

module.exports = app;