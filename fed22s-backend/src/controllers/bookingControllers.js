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
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findById(bookingId);
    if (!bookingId) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.json(booking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};

exports.createNewBooking = async (req, res) => {
  try {
    const data = req.body;
    const booking = new Booking({
      booker: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
      },
      guest: data.guest,
      seatingTime: data.seatingTime,
      seatingDate: data.seatingDate,
      message: data.message,
    });
    const newBooking = await Booking.create(booking);
    console.log(newBooking);
    if (!newBooking) {
      return response.status(500).json({ message: "Internal error" });
    }
    return res
      .setHeader("Location", `http://localhost:${process.env.PORT}/api/v1/bookings/${newBooking._id}`) //ska vi ha toString()?
      .status(201)
      .json(newBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error test" });
  }
};

exports.updateBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const { guests } = req.body;

    const bookingToUpdate = await Booking.findById(bookingId);

    if (!bookingToUpdate) return res.sendStatus(404);

    if (guests) bookingToUpdate.guests = guests;
    const updatedBooking = await bookingToUpdate.save();

    return res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};

exports.deleteBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;
  try {
    const bookingToDelete = await Booking.findById(bookingId);
    if (!bookingToDelete) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }
    await bookingToDelete.delete();
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};
