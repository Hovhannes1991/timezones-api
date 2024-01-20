const axios = require("axios");
const {ERROR_DEFAULT_MESSAGE} = require("../constants");

const BASE_URL = "https://timeapi.io/api/TimeZone/"

const availableTimeZones = async (req, res) => {
    try {
        const {data} = await axios.get(BASE_URL + "AvailableTimeZones");
        res.json(data);
    } catch (err) {
        res.status(422).json({message: err.message || ERROR_DEFAULT_MESSAGE, status: err.status || 500})
    }
}

module.exports = {availableTimeZones};