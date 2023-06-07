import { AmountOfGuestsInput } from "../AmountOfGuestsInput";
import { AvailableTimes } from "../AvailableTimes";
import { CalendarView } from "../Calendar";
import { GuestForm } from "../forms/GuestForm";

export const Booking = () => {
  return (
    <>
      <h1>Booking</h1>
      <AmountOfGuestsInput />
      <CalendarView />
      <AvailableTimes />
      <GuestForm />
    </>
  );
};
