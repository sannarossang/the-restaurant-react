import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarView = () => {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date}></Calendar>
    </>
  );
};
