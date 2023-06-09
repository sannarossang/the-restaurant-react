import { useContext, useEffect, useState } from "react";
import {
  BookSeating,
  SeatingTime,
  SeatingTimeSlot,
  SeatingTimesWrapper,
  Wrapper,
} from "./styled/AvailableTimes";
import { CurrentBookingDispatchContext } from "../contexts/CurrentBookingContext";
import { ActionType } from "../reducers/CurrentBookingReducer";

export const AvailableTimes = () => {
  const seatingTimes = ["18:00", "21:00"];
  const dispatch = useContext(CurrentBookingDispatchContext);

  const handleSelectedTime = (seatingTime: string) => {
    dispatch({ type: ActionType.SELECTED_SEATING_TIME, payload: seatingTime });
  };

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
