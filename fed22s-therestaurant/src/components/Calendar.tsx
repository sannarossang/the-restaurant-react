import { ChangeEvent, useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CurrentBookingContext, CurrentBookingDispatchContext } from "../contexts/CurrentBookingContext";
import { ActionType } from "../reducers/CurrentBookingReducer";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarView = () => {
  const [date, setDate] = useState<Value>(new Date());
  const dispatch = useContext(CurrentBookingDispatchContext);

  const handleChange = (date: Value) => {
    setDate(date);
    dispatch({
      type: ActionType.SELECTED_SEATING_DATE,
      payload: date?.toLocaleString().substring(0, 10),
    });
  };

  return (
    <>
      <Calendar minDate={new Date()} onChange={handleChange} value={date}></Calendar>
    </>
  );
};
