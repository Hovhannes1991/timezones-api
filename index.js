const express = require("express");
const index = express();
const cors = require('cors');
require("dotenv").config();

const router = require("./src/routes/index");
const corsConfig = require("./config/cors-config");

index.use(cors(corsConfig));
index.use(router);

const PORT = process.env.PORT || 4000;

index.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

module.exports = index;