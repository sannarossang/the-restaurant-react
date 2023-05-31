const express = require("express");
const {
  createNewBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} = require("../controllers/bookingControllers");
const router = express.Router();

router.post("/", createNewBooking);
router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.put("/:id", updateBookingById);
router.delete(":/cartId", deleteBookingById);

module.exports = router;
