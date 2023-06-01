import axios from "axios";
import { useEffect, useState } from "react";

interface IBooking {
  data: [];
}

export const Home = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const bookings = await axios
        .get<IBooking>("http://localhost:4000/api/v1/admin")
        .then((response) => response.data.data);

      console.log(bookings);
    };

    getBookings();
    setBookings(bookings);
  });

  return (
    <>
      <h1>Home</h1>
    </>
  );
};
