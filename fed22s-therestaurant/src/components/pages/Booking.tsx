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

export const Booking = () => {
  const [currentBooking, dispatch] = useReducer(CurrentBookingReducer, {
    booker: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },

    guests: 0,
    message: "",
    seatingTime: "",
    seatingDate: new Date(),
    _id: "",
  });

  return (
    <>
      <CurrentBookingContext.Provider value={currentBooking}>
        <CurrentBookingDispatchContext.Provider value={dispatch}>
          ¨<h1>Booking</h1>
          <AmountOfGuestsInput />
          <CalendarView />
          <AvailableTimes />
          <GuestForm />
        </CurrentBookingDispatchContext.Provider>
      </CurrentBookingContext.Provider>
    </>
  );
};
