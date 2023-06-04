const { getBooking, createBooking, updateBooking, deleteBooking } = require("../functions/booking");
const Booking = require("../models/Booking");

exports.getAllBookings = async (req, res) => {
  if (new Date(req.query.seatingDate) == "Invalid Date") {
    return res.status(400).json({ message: "Invalid seatingDate" });
  }

  const reqQuery = new Date(req.query.seatingDate);
  const reqQueryMinusOneDay = new Date().setDate(reqQuery.getDate() - 1);
  const reqQueryPlusOneDay = new Date().setDate(reqQuery.getDate() + 1);
  try {
    const bookings = await Booking.find({
      seatingDate: { $gte: reqQueryMinusOneDay, $lte: reqQueryPlusOneDay },
    });
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
