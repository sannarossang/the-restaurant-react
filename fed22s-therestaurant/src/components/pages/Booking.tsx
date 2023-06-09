import { useReducer } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../contexts/CurrentBookingContext";
import { AmountOfGuestsInput } from "../AmountOfGuestsInput";
import { AvailableTimes } from "../AvailableTimes";
import { CalendarView } from "../Calendar";
import { GuestForm } from "../forms/GuestForm";
import { CurrentBookingReducer } from "../../reducers/CurrentBookingReducer";
import { BookingForm } from "../forms/BookingForm";

export const Booking = () => {
  return (
    <>
      <BookingForm></BookingForm>
    </>
  );
};
