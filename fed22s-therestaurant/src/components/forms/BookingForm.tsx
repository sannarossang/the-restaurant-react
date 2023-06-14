import { useContext } from "react";
import { CurrentBookingContext } from "../../contexts/CurrentBookingContext";
import { CalendarView } from "../Calendar";
import { AmountOfGuestsInput } from "../AmountOfGuestsInput";
import { AvailableTimes } from "../AvailableTimes";
import { GuestForm } from "./GuestForm";

export const BookingForm = () => {
  const currentBooking = useContext(CurrentBookingContext);
  return (
    <>
      {!currentBooking.guests ? <AmountOfGuestsInput /> : <></>}
      {currentBooking.guests && !currentBooking.seatingDate ? <CalendarView /> : <></>}
      {currentBooking.seatingDate && !currentBooking.seatingTime ? <AvailableTimes /> : <></>}
      {currentBooking.seatingTime ? <GuestForm /> : <></>}
    </>
  );
};
