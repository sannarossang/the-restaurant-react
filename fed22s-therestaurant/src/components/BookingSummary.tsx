import { useContext } from "react";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { createNewBooking } from "../services/BookingService";

export const BookingSummary = () => {
  const booking = useContext(CurrentBookingContext);

  const handleBooking = () => {
    createNewBooking("booker", booking);
  };

  return (
    <>
      <div>
        <p>
          {" "}
          {booking.booker.firstname} {booking.booker.lastname}
        </p>
        <p>gäster: {booking.guests}</p>
        <p>tid: {booking.seatingTime} </p>
        <button onClick={handleBooking}>BOKA!!!!</button>
      </div>
    </>
  );
};
