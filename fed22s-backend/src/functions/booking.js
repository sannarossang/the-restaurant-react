const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const data = req.body;

    //validera http body, återanvända update valideringen? bryta ut till egen funktion?

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
    return res.status(500).json({ message: "Internal error" });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    if (bookingId.length != 24) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const { booker, guests, seatingTime, seatingDate, message } = req.body;
    if (
      booker &&
      booker.firstname != undefined &&
      booker.lastname != undefined &&
      booker.email != undefined &&
      booker.phone != undefined
    ) {
      return res.status(400).json({ message: "Invalid Booked body" });
    }

    if (typeof guests === "number" && guests > 0 && guest < 12) {
      return res.status(400).json({ message: "Invalid guests" });
    }

    if (typeof message === "string") {
      return res.status(400).json({ message: "Invalid message" });
    }

    if (new Date(seatingDate) == "Invalid Date") {
      return res.status(400).json({ message: "Invalid seatingDate" });
    }

    //behöver validera korrekt tidsstämpel? använda enum från modellen?
    if (seatingTime == false) {
      return res.status(400).json({ message: "Invalid seatingTime" });
    }

    const bookingToUpdate = await Booking.findById(bookingId);

    if (!bookingToUpdate) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booker) bookingToUpdate.booker.firstname = booker.firstname;
    if (booker) bookingToUpdate.booker.lastname = booker.lastname;
    if (booker) bookingToUpdate.booker.email = booker.email;
    if (booker) bookingToUpdate.booker.phone = booker.phone;
    if (guests) bookingToUpdate.guests = guests;
    if (seatingTime) bookingToUpdate.seatingTime = seatingTime;
    if (seatingDate) bookingToUpdate.seatingDate = seatingDate;
    if (message) bookingToUpdate.message = message;

    //vilka fält ska admin kunna uppdatera? lägg till ta bort när vi är i front end

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
    if (bookingId.length != 24) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking) {
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
  if (bookingId.length != 24) {
    return res.status(400).json({ message: "Invalid id" });
  }

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
