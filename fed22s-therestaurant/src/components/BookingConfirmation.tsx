import { useContext } from "react";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";

export const BookingConfirmation = () => {
  const booking = useContext(CurrentBookingContext);

  return (
    <>
      <h1>Här är din bokningsbekräftelse {booking.booker.firstname}</h1>
      <p>Du har bokat:</p>
      <p>Antal gäster: {booking.guests}</p>
      <p>Datum: {booking.seatingDate}</p>
      <p>Tid: {booking.seatingTime} </p>
      <p>Här är ditt bokningsnummer {booking._id}</p>
    </>
  );
};
