const express = require("express");
const { createNewBooking, getBookingById, deleteBookingById } = require("../controllers/bookerControllers");
const router = express.Router();

router.get("/:bookingId", getBookingById);
router.post("/", createNewBooking);
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
