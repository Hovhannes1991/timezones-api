const path = require("path");
const express = require("express");
const router = express.Router();

const originMiddleware = require("../middlewares/origin-middleware");

const timezoneRoutes = require("./timezones-routes");


router.use("/", originMiddleware);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "home.html"));
})

router.use("/api", timezoneRoutes);

module.exports = router;