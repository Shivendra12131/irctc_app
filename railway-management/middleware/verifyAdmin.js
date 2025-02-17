require("dotenv").config();

module.exports = (req, res, next) => {
    const apiKey = req.header("API-Key");
    console.log("req.Api-key",apiKey);
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {

        return res.status(403).json({ message: "Forbidden: Invalid API Key" });
    }
    next();
};
