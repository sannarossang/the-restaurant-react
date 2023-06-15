import { useReducer, useState } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../../contexts/CurrentBookingContext";
import { CurrentBookingReducer } from "../../../reducers/CurrentBookingReducer";
import { BookingForm } from "../../forms/BookingForm";
import { defaultBookingValues } from "../../../models/defaultBookingValues";
import { BookingSummary } from "./BookingForm/BookingSummary";
import { BookingConfirmation } from "./BookingForm/BookingConfirmation";
import {
  BookingModal,
  BookingWrapper,
  ExitButton,
  ModalContent,
  ModalNavWrapper,
  Title,
} from "../../styled/Booking/Booking";
import { Link } from "react-router-dom";

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
              <ModalNavWrapper>
                <Title>RESTAURANG AMOUT</Title>
                <ExitButton>
                  <Link to="/">X</Link>
                </ExitButton>
              </ModalNavWrapper>
              <ModalContent>
                {/* <BookingModal> */}
                {!currentBooking.booker.email ? <BookingForm /> : <></>}
                {currentBooking.booker.email && !currentBooking._id ? (
                  <BookingSummary />
                ) : (
                  <></>
                )}
                {currentBooking._id ? <BookingConfirmation /> : <></>}
                {/* </BookingModal> */}
              </ModalContent>
            </BookingModal>
          </BookingWrapper>
        </CurrentBookingDispatchContext.Provider>
      </CurrentBookingContext.Provider>
    </>
  );
};
