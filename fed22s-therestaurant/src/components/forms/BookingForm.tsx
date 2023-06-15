import { useContext } from "react";
import { CurrentBookingContext } from "../../contexts/CurrentBookingContext";
import { CalendarView } from "../pages/Booking/BookingForm/Calendar";
import { AmountOfGuestsInput } from "../pages/Booking/BookingForm/AmountOfGuestsInput";
import { AvailableTimes } from "../pages/Booking/BookingForm/AvailableTimes";
import { GuestForm } from "./GuestForm";

export const BookingForm = () => {
  const currentBooking = useContext(CurrentBookingContext);
  return (
    <>
      {!currentBooking.guests ? <AmountOfGuestsInput /> : <></>}
      {currentBooking.guests && !currentBooking.seatingDate ? (
        <CalendarView />
      ) : (
        <></>
      )}
      {currentBooking.seatingDate && !currentBooking.seatingTime ? (
        <AvailableTimes />
      ) : (
        <></>
      )}
      {currentBooking.seatingTime ? <GuestForm /> : <></>}
    </>
  );
};
