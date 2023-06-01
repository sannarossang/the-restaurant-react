const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const data = req.body;
    const booking = new Booking({
      booker: {
        firstname: data.booker.firstname,
        lastname: data.booker.lastname,
        email: data.booker.email,
        phone: data.booker.phone,
      },
      guests: data.guests,
      seatingTime: data.seatingTime,
      seatingDate: data.seatingDate,
      message: data.message,
    });
    const newBooking = await Booking.create(booking);
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

exports.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    const { booker, guests, seatingTime, seatingDate, message } = req.body;

    const bookingToUpdate = await Booking.findById(bookingId);

    if (!bookingToUpdate) return res.sendStatus(404);

    if (booker) bookingToUpdate.booker.firstname = booker.firstname;
    if (booker) bookingToUpdate.booker.lastname = booker.lastname;
    if (booker) bookingToUpdate.booker.email = booker.email;
    if (booker) bookingToUpdate.booker.phone = booker.phone;
    if (guests) bookingToUpdate.guests = guests;
    if (seatingTime) bookingToUpdate.seatingTime = seatingTime;
    if (seatingDate) bookingToUpdate.seatingDate = seatingDate;
    if (message) bookingToUpdate.message = message;

    const updatedBooking = await bookingToUpdate.save();

    return res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};

exports.getBooking = async (req, res) => {
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

exports.deleteBooking = async (req, res) => {
  const bookingId = req.params.bookingId;
  try {
    const bookingToDelete = await Booking.findById(bookingId);
    if (!bookingToDelete) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }
    await bookingToDelete.deleteOne();
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal error" });
  }
};
