const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  booker: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  guests: {
    type: Number,
    required: true,
  },
  seatingTime: {
    type: String,
    enum: ["18:00", "21:00"],
    /*Eventuellt ändra datatyp till number sedan. Vi tänker att det är enklare att ha det som string
    eftersom att Date också blir en string.
    */
    required: true,
  },
  seatingDate: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
