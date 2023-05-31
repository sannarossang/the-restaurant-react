const mongoose = require("mongoose");
require("dotenv").config();
const Booking = require("../src/models/Booking");
const { bookings } = require("./bookings");

const seedBookingDB = async () => {
  let connection;
  try {
    mongoose.set("strictQuery", false);
    connection = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);

    console.log("Clearing database...");
    await Booking.deleteMany();

    console.log("Adding data...");
    await Booking.create(bookings);

    console.log("Database successfully populated with data...");
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.disconnect();
    process.exit(0);
  }
};

seedBookingDB();
