import { useEffect, useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarView = () => {
  const [date, setDate] = useState<Value>(new Date());

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <Calendar onChange={setDate} value={date}></Calendar>
    </>
  );
};
