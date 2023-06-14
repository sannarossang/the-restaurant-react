import { useContext, useState } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../contexts/CurrentBookingContext";
import { createNewBooking } from "../services/BookingService";
import {
  ConfirmBookingButton,
  ConfirmationText,
  GDPRWrapper,
  GDPRcheckbox,
  InfoText,
  TermsAndConditions,
} from "./styled/BookingSummary";
import { BookingConfirmation } from "./BookingConfirmation";
import { ActionType } from "../reducers/CurrentBookingReducer";

export const BookingSummary = () => {
  const booking = useContext(CurrentBookingContext);
  const dispatch = useContext(CurrentBookingDispatchContext);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  console.log(checked);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBooking = async () => {
    const response = await createNewBooking("booker", booking);
    setShowConfirmation(true);
    dispatch({ type: ActionType.GOT_BOOKING_ID, payload: response.data._id });
  };

  return (
    <>
      <div>
        <p>
          {" "}
          {booking.booker.firstname} {booking.booker.lastname}
        </p>
        <p>gäster: {booking.guests}</p>
        <p>tid: {booking.seatingTime} </p>
        <GDPRWrapper>
          <InfoText>Nästan där</InfoText>
          <InfoText>
            För att fortsätta måste du godkänna restaurangens villkor.
          </InfoText>
          <TermsAndConditions>
            LÄS BOOKER BOOKING AB ALLMÄNNA VILLKOR
          </TermsAndConditions>
          <div>
            <GDPRcheckbox checked={checked} onChange={handleChange} />{" "}
            <ConfirmationText>
              Jag godkänner villkoren och att Restaurang Booker sparar mina
              uppgifter.
            </ConfirmationText>
          </div>
        </GDPRWrapper>
        <ConfirmBookingButton disabled={!checked} onClick={handleBooking}>
          BOKA!!!!
        </ConfirmBookingButton>
        {showConfirmation && <BookingConfirmation />}
      </div>
    </>
  );
};
