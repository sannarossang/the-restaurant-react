import { useReducer } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../contexts/CurrentBookingContext";
import { CurrentBookingReducer } from "../../reducers/CurrentBookingReducer";
import { BookingForm } from "../forms/BookingForm";
import { defaultBookingValues } from "../../models/defaultBookingValues";
import { BookingSummary } from "../BookingSummary";

export const Booking = () => {
  const [currentBooking, dispatch] = useReducer(
    CurrentBookingReducer,
    defaultBookingValues
  );
  return (
    <>
      <CurrentBookingContext.Provider value={currentBooking}>
        <CurrentBookingDispatchContext.Provider value={dispatch}>
          {!currentBooking.booker.email ? <BookingForm /> : <></>}
          {currentBooking.booker.email ? <BookingSummary /> : <></>}
        </CurrentBookingDispatchContext.Provider>
      </CurrentBookingContext.Provider>
    </>
  );
};
