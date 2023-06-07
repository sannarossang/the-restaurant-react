const express = require("express");
const {
  getAllBookings,
  getBookingById,
  createNewBooking,
  updateBookingById,
  deleteBookingById,
} = require("../controllers/adminControllers");
const router = express.Router();

router.get("/", getAllBookings);
router.get("/:bookingId", getBookingById);
router.post("/", createNewBooking);
router.put("/:bookingId", updateBookingById);
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
