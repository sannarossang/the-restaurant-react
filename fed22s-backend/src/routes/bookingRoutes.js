const express = require("express");
const {
  createNewBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} = require("../controllers/bookingControllers");
const router = express.Router();

router.get("/", getAllBookings);
router.get("/:bookingId", getBookingById);
router.post("/", createNewBooking);
router.put("/:bookingId", updateBookingById);
router.delete(":/bookingId", deleteBookingById);

module.exports = router;
