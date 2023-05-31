const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  booker: {
    firstname: {
      type: String,
      // required: true,
    },
    lastname: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
  },
  guests: {
    type: Number,
    // required: true,
  },
  seating: {
    enum: ["18:00-20:45", "21:00-23:45"],
    /*Eventuellt ändra datatyp till number sedan. Vi tänker att det är enklare att ha det som string
    eftersom att Date också blir en string.
    */
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
