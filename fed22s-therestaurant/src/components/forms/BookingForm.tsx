import { useReducer } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../contexts/CurrentBookingContext";
import { AmountOfGuestsInput } from "../AmountOfGuestsInput";
import { AvailableTimes } from "../AvailableTimes";
import { CalendarView } from "../Calendar";
import { GuestForm } from "./GuestForm";
import { CurrentBookingReducer } from "../../reducers/CurrentBookingReducer";
import { defaultBookingValues } from "../../models/defaultBookingValues";

export const BookingForm = () => {
  const [currentBooking, dispatch] = useReducer(
    CurrentBookingReducer,
    defaultBookingValues
  );

  return (
    <>
      <CurrentBookingContext.Provider value={currentBooking}>
        <CurrentBookingDispatchContext.Provider value={dispatch}>
          ¨<h1>Booking</h1>
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
        </CurrentBookingDispatchContext.Provider>
      </CurrentBookingContext.Provider>
    </>
  );
};
