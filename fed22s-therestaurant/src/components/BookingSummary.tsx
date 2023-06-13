import { useContext, useState } from "react";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { createNewBooking } from "../services/BookingService";
import {
  ConfirmBookingButton,
  ConfirmationText,
  GDPRWrapper,
  GDPRcheckbox,
  InfoText,
  TermsAndConditions,
} from "./styled/BookingSummary";

export const BookingSummary = () => {
  const booking = useContext(CurrentBookingContext);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  console.log(checked);

  const handleBooking = () => {
    createNewBooking("booker", booking);
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
      </div>
    </>
  );
};
