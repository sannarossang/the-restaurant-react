const { getAllBookings, getBooking, createBooking, deleteBooking } = require("../functions/booking");
const Booking = require("../models/Booking");

exports.getAllBookings = async (req, res) => {
  return getAllBookings(req, res);
};

exports.getBookingById = async (req, res) => {
  return getBooking(req, res);
};

exports.createNewBooking = async (req, res) => {
  return createBooking(req, res);
};

exports.deleteBookingById = async (req, res) => {
  return deleteBooking(req, res);
};
