import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { createNewBooking } from "../services/BookingService";
import { BookingConfirmation } from "./BookingConfirmation";

export const BookingSummary = () => {
  const booking = useContext(CurrentBookingContext);
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleBooking = () => {
    createNewBooking("booker", booking);
    setShowConfirmation(true);
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
        {<button onClick={handleBooking}>BOKA!!!!</button> ? <BookingConfirmation /> : <></>}
      </div>
    </>
  );
};
