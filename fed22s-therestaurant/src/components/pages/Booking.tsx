import { useReducer, useState } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../contexts/CurrentBookingContext";
import { CurrentBookingReducer } from "../../reducers/CurrentBookingReducer";
import { BookingForm } from "../forms/BookingForm";
import { defaultBookingValues } from "../../models/defaultBookingValues";
import { BookingSummary } from "../BookingSummary";
import { BookingConfirmation } from "../BookingConfirmation";
import { BookingModal, BookingWrapper } from "../styled/Booking/Booking";

export const Booking = () => {
  const [currentBooking, dispatch] = useReducer(
    CurrentBookingReducer,
    defaultBookingValues
  );
  return (
    <>
      <CurrentBookingContext.Provider value={currentBooking}>
        <CurrentBookingDispatchContext.Provider value={dispatch}>
          <BookingWrapper>
            <BookingModal>
              {/* <BookingModal> */}
              {!currentBooking.booker.email ? <BookingForm /> : <></>}
              {currentBooking.booker.email && !currentBooking._id ? (
                <BookingSummary />
              ) : (
                <></>
              )}
              {currentBooking._id ? <BookingConfirmation /> : <></>}
              {/* </BookingModal> */}
            </BookingModal>
          </BookingWrapper>
        </CurrentBookingDispatchContext.Provider>
      </CurrentBookingContext.Provider>
    </>
  );
};
