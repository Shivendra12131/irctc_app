const express = require("express");
const { bookSeat, getBookingDetails } = require("../controllers/bookingController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post("/book", verifyToken, bookSeat);
router.get("/details", verifyToken, getBookingDetails);

module.exports = router;
