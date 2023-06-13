import { useContext } from "react";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";

export const BookingConfirmation = () => {
  const booking = useContext(CurrentBookingContext);

  return (
    <>
      <h1>Hej {booking.booker.firstname}! Din bokning har genomförts.</h1>
      <p>En bokningsbekräftelse har skickats till {booking.booker.email}</p>
    </>
  );
};
