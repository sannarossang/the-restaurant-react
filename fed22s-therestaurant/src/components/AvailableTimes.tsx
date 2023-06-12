import { useContext, useEffect, useState } from "react";
import { BookSeating, SeatingTime, SeatingTimeSlot, SeatingTimesWrapper, Wrapper } from "./styled/AvailableTimes";
import { CurrentBookingContext, CurrentBookingDispatchContext } from "../contexts/CurrentBookingContext";
import { ActionType } from "../reducers/CurrentBookingReducer";
import { getBookings } from "../services/BookingService";

export const AvailableTimes = () => {
  const [seatings, setSeatings] = useState([
    { time: "18:00", isFullyBooked: false },
    { time: "21:00", isFullyBooked: false },
  ]);

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
      console.log("DATA FROM API", dataFromApi);

      dataFromApi.map(booking => {
        if (booking.seatingTime === "18:00") {
          if (booking.guests <= 6) {
            firstSeating += 6;
          }
          if (booking.guests > 6 && booking.guests <= 12) {
            firstSeating += 12;
          }
        }
      });

      dataFromApi.map(booking => {
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

      console.log("FIRST SEATING", firstSeating);
      console.log("SECOND SEATING", secondSeating);
      console.log("AVAILABLE SEATS EARLY", availableSeatsEarly);
      console.log("AVAILABLE SEATS LATE", availableSeatsEarly);

      if (availableSeatsEarly === 0 || currentBooking.guests > availableSeatsEarly) {
        setSeatings({
          ...seatings.map(seating => {
            if (seating.time === "18:00") {
              return { ...seating, isFullyBooked: true };
            } else {
              return seating;
            }
          }),
        });

        console.log("det är fullbokat i första sittningen!");
      }

      console.log("Current booking guests:", currentBooking.guests, "Available Seats Late:", availableSeatsLate);
      if (availableSeatsLate === 0 || currentBooking.guests > availableSeatsLate) {
        setSeatings({
          ...seatings.map(seating => {
            if (seating.time === "21:00") {
              return { ...seating, isFullyBooked: true };
            } else {
              return seating;
            }
          }),
        });

        console.log("det är fullbokat i andra sittningen!");
      }
      console.log(
        "Current booking guests igen:",
        currentBooking.guests,
        "Available Seats Late igen:",
        availableSeatsLate
      );
    };

    getData();
  }, []);

  console.log("SEATINGS AFTER", seatings);

  return (
    <>
      <Wrapper>
        <SeatingTimesWrapper>
          <SeatingTimeSlot onClick={() => handleSelectedTime(seatings[0].time)}>
            <SeatingTime>{seatings[0].time}</SeatingTime>
            <BookSeating>{!seatings[0].isFullyBooked ? "Boka" : "Fullbokat"}</BookSeating>
          </SeatingTimeSlot>
          <SeatingTimeSlot onClick={() => handleSelectedTime(seatings[1].time)}>
            <SeatingTime>{seatings[1].time}</SeatingTime>
            <BookSeating>{!seatings[1].isFullyBooked ? "Boka" : "Fullbokat"}</BookSeating>
          </SeatingTimeSlot>
        </SeatingTimesWrapper>
      </Wrapper>
    </>
  );
};
