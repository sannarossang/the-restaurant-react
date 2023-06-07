import { useEffect, useState } from "react";
import {
  BookSeating,
  SeatingTime,
  SeatingTimeSlot,
  SeatingTimesWrapper,
  Wrapper,
} from "./styled/AvailableTimes";

export const AvailableTimes = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const seatingTimes = ["18:00-20:45", "21:00-23:45"];

  return (
    <>
      <Wrapper>
        <SeatingTimesWrapper>
          <SeatingTimeSlot onClick={() => setSelectedTime(seatingTimes[0])}>
            <SeatingTime>{seatingTimes[0]}</SeatingTime>
            <BookSeating>Boka</BookSeating>
          </SeatingTimeSlot>
          <SeatingTimeSlot onClick={() => setSelectedTime(seatingTimes[1])}>
            <SeatingTime>{seatingTimes[1]}</SeatingTime>
            <BookSeating>Boka</BookSeating>
          </SeatingTimeSlot>
        </SeatingTimesWrapper>
      </Wrapper>
    </>
  );
};
