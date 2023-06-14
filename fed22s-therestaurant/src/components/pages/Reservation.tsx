import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultBookingValues } from "../../models/defaultBookingValues";
import { IBooking } from "../../models/IBooking";
import { getBooking } from "../../services/BookingService";

export const Reservation = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<IBooking>(defaultBookingValues);

  useEffect(() => {
    const getData = async () => {
      const bookingFromApi = await getBooking("booker", bookingId || "");
      setBooking(bookingFromApi);
    };
    getData();
    console.log("booking", booking);
  }, []);
  console.log("booking after", booking);

  return (
    <>
      <h1>Hej {booking.booker.firstname} här är din bokning!</h1>
      <p>Namn: {booking.booker.firstname}</p>
      <p>Efternamn: {booking.booker.lastname}</p>
      <p>Email: {booking.booker.email}</p>
      <p>Telefonnummer: {booking.booker.phone}</p>
      <p>Datum: {booking.seatingDate}</p>
      <p>Tid: {booking.seatingTime}</p>
      <p>Antal gäster: {booking.guests}</p>
      <p>Bokningsnummer: {booking._id}</p>
    </>
  );
};
