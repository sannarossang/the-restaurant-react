import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingDispatchContext } from "../../contexts/BookingContext";
import { defaultBookingValues } from "../../models/defaultBookingValues";
import { IBooking } from "../../models/IBooking";
import { ActionType } from "../../reducers/CurrentBookingReducer";
import { deleteBooking, getBooking } from "../../services/BookingService";

export const Reservation = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<IBooking>(defaultBookingValues);
  const dispatch = useContext(BookingDispatchContext);
  const [showReservation, setshowReservation] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const bookingFromApi = await getBooking("booker", bookingId || "");
      setBooking(bookingFromApi);
    };
    getData();
  }, []);
  console.log(booking);

  const handleDelete = (id: string) => {
    dispatch({ type: ActionType.DELETED, payload: bookingId || "" });
    deleteBooking("booker", id);
    setshowReservation(false);
    alert("Din bokning har avbokats");
  };

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
      <button onClick={() => handleDelete(booking._id)}>Avboka</button>
      {showReservation && <></>}
    </>
  );
};
