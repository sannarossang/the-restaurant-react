import { useEffect, useState } from "react";
import {
  SeatingTime,
  SeatingTimesWrapper,
  Wrapper,
} from "./styled/AvailableTimes";
import { getBookings } from "../services/BookingService";

export const AvailableTimes = () => {
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    const getAlltBookings = async () => {
      const selectedDateBookings = await getBookings("2023-07-01");
      console.log(selectedDateBookings);
    };

    getAlltBookings();
  }, []);

  return (
    <>
      <Wrapper>
        <SeatingTimesWrapper>
          <SeatingTime></SeatingTime>
        </SeatingTimesWrapper>
      </Wrapper>
    </>
  );
};
