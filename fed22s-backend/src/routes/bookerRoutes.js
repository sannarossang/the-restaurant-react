const express = require("express");
const {
  createNewBooking,
  getAllBookings,
  getBookingById,
  deleteBookingById,
} = require("../controllers/bookerControllers");
const { getAllBookings } = require("../functions/booking");
const router = express.Router();

router.get("/", getAllBookings);
router.get("/:bookingId", getBookingById);
router.post("/", createNewBooking);
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
