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
    message: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
