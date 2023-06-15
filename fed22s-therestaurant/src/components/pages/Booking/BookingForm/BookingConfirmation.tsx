import { useContext } from "react";
import { CurrentBookingContext } from "../../../../contexts/CurrentBookingContext";
import {
  ConfirmationDetails,
  ConfirmationGuestBox,
  ConfirmationReference,
  ConfirmationText,
  ConfirmationTextBox,
  ConfirmationWrapper,
} from "../../../styled/Booking/BookingConfirmation";

export const BookingConfirmation = () => {
  const booking = useContext(CurrentBookingContext);

  return (
    <>
      <ConfirmationWrapper>
        <ConfirmationTextBox>
          <ConfirmationText size="25px" weight="bold" padding="0px">
            Tack för din bokning, {booking.booker.firstname}!
          </ConfirmationText>
          <ConfirmationText size="12px">
            Du är nu klar och din bekräftelse har skickats till din mejl:{" "}
            {booking.booker.email}
          </ConfirmationText>
        </ConfirmationTextBox>

        <ConfirmationDetails>
          <ConfirmationReference>
            <ConfirmationText weight="bold">Bokningsreferens</ConfirmationText>
            <ConfirmationText>{booking._id}</ConfirmationText>
          </ConfirmationReference>

          <ConfirmationGuestBox>
            <ConfirmationText weight="bold">Gästinformation</ConfirmationText>
            <ConfirmationText>
              {booking.booker.firstname} {booking.booker.lastname}
            </ConfirmationText>
            <ConfirmationText>{booking.booker.email}</ConfirmationText>
            <ConfirmationText>{booking.booker.phone}</ConfirmationText>
          </ConfirmationGuestBox>
        </ConfirmationDetails>
      </ConfirmationWrapper>
    </>
  );
};
