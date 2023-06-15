import { useContext } from "react";
import { createNewBooking } from "../../../../services/BookingService";
import { BookingForm } from "../../../forms/BookingForm";
import { CurrentBookingContext } from "../../../../contexts/CurrentBookingContext";

export const AdminBooking = () => {
  const newBooking = useContext(CurrentBookingContext);
  return (
    <>
      <BookingForm></BookingForm>
      <button onClick={() => createNewBooking("admin", newBooking)}>
        BOKA FRÅN ADMIN
      </button>
    </>
  );
};
