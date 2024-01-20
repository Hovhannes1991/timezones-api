const express = require("express");
const router = express.Router();
const {availableTimeZones} = require("../controllers/timezones-controller");

router.get("/available-time-zones", availableTimeZones);

module.exports = router;