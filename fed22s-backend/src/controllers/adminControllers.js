const { getBooking, createBooking, updateBooking } = require("../functions/booking");
const Booking = require("../models/Booking");

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    return res.json({
      data: bookings,
      meta: {
        count: bookings.length,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};

exports.getBookingById = async (req, res) => {
  return getBooking(req, res);
};

exports.createNewBooking = async (req, res) => {
  return createBooking(req, res);
};

exports.updateBookingById = async (req, res) => {
  return updateBooking(req, res);
};

exports.deleteBookingById = async (req, res) => {
  return deleteBooking(req, res);
};
