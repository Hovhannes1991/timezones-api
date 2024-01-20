const originMiddleware = (req, res, next) => {
    const origin = req.get("origin");
    if (!origin || origin === process.env.FRONT_END_ORIGIN) {
        next();
    } else {
        res.status(403).json({message: "Access denied"})
    }
}

module.exports = originMiddleware;