const corsConfig = {
    origin: function (origin, callback) {
        // Check if the origin is in the allowedOrigins array or if it is undefined (e.g., Postman)
        if (!origin || origin === process.env.FRONT_END_ORIGIN) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: 'GET,HEAD',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204,  // Respond with a 204 No Content on preflight requests
};

module.exports = corsConfig;