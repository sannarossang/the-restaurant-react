import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CurrentBookingDispatchContext } from "../../../../contexts/CurrentBookingContext";
import { ActionType } from "../../../../reducers/CurrentBookingReducer";
import { CalendarWrapper } from "../../../styled/Booking/BookingForm/Calendar";

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
      <CalendarWrapper>
        <Calendar
          minDate={new Date()}
          onChange={handleChange}
          value={date}
        ></Calendar>
      </CalendarWrapper>
    </>
  );
};
