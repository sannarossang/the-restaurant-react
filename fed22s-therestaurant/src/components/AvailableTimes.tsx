import { useContext, useEffect, useState } from "react";
import {
  BookSeating,
  SeatingTime,
  SeatingTimeSlot,
  SeatingTimesWrapper,
  Wrapper,
} from "./styled/AvailableTimes";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../contexts/CurrentBookingContext";
import { ActionType } from "../reducers/CurrentBookingReducer";
import { getBookings } from "../services/BookingService";
import { IBooking } from "../models/IBooking";

export const AvailableTimes = () => {
  const seatings = ["18:00", "21:00"];
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const currentBooking = useContext(CurrentBookingContext);
  const dispatch = useContext(CurrentBookingDispatchContext);

  const totalAmountOfGuest = 90;
  let firstSeating = 0;
  let secondSeating = 0;

  const handleSelectedTime = (seatingTime: string) => {
    dispatch({ type: ActionType.SELECTED_SEATING_TIME, payload: seatingTime });
  };

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings(currentBooking.seatingDate);
      setBookings(dataFromApi);
    };

    if (bookings.length === 0) getData();
  }, []);

  bookings.map((booking) => {
    if (booking.seatingTime === "18:00") {
      if (booking.guests <= 6) {
        firstSeating += 6;
      }
      if (booking.guests > 6 && booking.guests <= 12) {
        firstSeating += 12;
      }
    }
  });

  bookings.map((booking) => {
    if (booking.seatingTime === "21:00") {
      if (booking.guests <= 6) {
        secondSeating += 6;
      }
      if (booking.guests > 6 && booking.guests <= 12) {
        secondSeating += 12;
      }
    }
  });

  let availableSeatsEarly = totalAmountOfGuest - firstSeating;
  let availableSeatsLate = totalAmountOfGuest - secondSeating;

  const isFullyBooked = (availableSeats: number) => {
    if (availableSeats === 0 || currentBooking.guests > availableSeats) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Wrapper>
        <SeatingTimesWrapper>
          <SeatingTimeSlot
            disabled={isFullyBooked(availableSeatsEarly)}
            onClick={() => handleSelectedTime(seatings[0])}
          >
            <SeatingTime>{seatings[0]}</SeatingTime>
            <BookSeating>
              {isFullyBooked(availableSeatsEarly) ? "Fullbokat" : "Boka"}
            </BookSeating>
          </SeatingTimeSlot>
          <SeatingTimeSlot onClick={() => handleSelectedTime(seatings[1])}>
            <SeatingTime>{seatings[1]}</SeatingTime>
            <BookSeating>
              {availableSeatsLate === 0 ||
              currentBooking.guests > availableSeatsLate
                ? "Fullbokat"
                : "Boka"}
            </BookSeating>
          </SeatingTimeSlot>
        </SeatingTimesWrapper>
      </Wrapper>
    </>
  );
};
