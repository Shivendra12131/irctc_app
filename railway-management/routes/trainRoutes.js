const express = require("express");
const { addTrain, getTrains, getSeatAvailability } = require("../controllers/trainController");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

router.post("/add", verifyAdmin, addTrain);
router.get("/search", getTrains);
router.get("/seats", getSeatAvailability);

module.exports = router;
