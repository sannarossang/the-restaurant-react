import { useContext, useEffect, useState } from "react";
import { BookSeating, SeatingTime, SeatingTimeSlot, SeatingTimesWrapper, Wrapper } from "./styled/AvailableTimes";
import { CurrentBookingContext, CurrentBookingDispatchContext } from "../contexts/CurrentBookingContext";
import { ActionType } from "../reducers/CurrentBookingReducer";
import { getBookings } from "../services/BookingService";

export const AvailableTimes = () => {
  const seatingTimes = ["18:00", "21:00"];
  const currentBooking = useContext(CurrentBookingContext);
  const dispatch = useContext(CurrentBookingDispatchContext);
  const totalAmountOfGuest = 90;
  let firstSeating = 0;

  const handleSelectedTime = (seatingTime: string) => {
    dispatch({ type: ActionType.SELECTED_SEATING_TIME, payload: seatingTime });
  };

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings(currentBooking.seatingDate);
      console.log("DATA FROM API", dataFromApi);

      dataFromApi.map(booking => {
        if (booking.seatingTime === "18:00") {
          console.log("INUTI LOOPEN");
          //om seatingtime är 18:
          if (booking.guests <= 6) {
            firstSeating += 6;
            //boka på 6 platser
          }
          if (booking.guests > 6 && booking.guests <= 12) {
            firstSeating += 12;
            //boka på 12 platser
          }
        }
      });

      let availableSeats = totalAmountOfGuest - firstSeating;
      console.log("FIRST SEATING", firstSeating);
      console.log("AVAILABLE SEATS", availableSeats);

      if (availableSeats === 0) {
        console.log("det är fullbokat!");
      }
    };
    getData();
  }, []);

  return (
    <>
      <Wrapper>
        <SeatingTimesWrapper>
          <SeatingTimeSlot onClick={() => handleSelectedTime(seatingTimes[0])}>
            <SeatingTime>{seatingTimes[0]}</SeatingTime>
            <BookSeating>Boka</BookSeating>
          </SeatingTimeSlot>
          <SeatingTimeSlot onClick={() => handleSelectedTime(seatingTimes[1])}>
            <SeatingTime>{seatingTimes[1]}</SeatingTime>
            <BookSeating>Boka</BookSeating>
          </SeatingTimeSlot>
        </SeatingTimesWrapper>
      </Wrapper>
    </>
  );
};
