import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingDispatchContext } from "../../../contexts/BookingContext";
import { defaultBookingValues } from "../../../models/defaultBookingValues";
import { IBooking } from "../../../models/IBooking";
import { deleteBooking, getBooking } from "../../../services/BookingService";
import { ActionType } from "../../../reducers/BookingReducer";
import {
  DeleteButton,
  DeletedText,
  DeletedWrapper,
  ReservationDetails,
  ReservationReference,
  ReservationText,
  ReservationWrapper,
} from "../../styled/Reservation/Reservation";
import { DefaultButton } from "../../styled/Buttons";

export const Reservation = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<IBooking>(defaultBookingValues);
  const dispatch = useContext(BookingDispatchContext);
  const [showReservation, setshowReservation] = useState(true);
  const [showDeleted, setshowDeleted] = useState(false);

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
    setshowDeleted(true);
  };

  return (
    <>
      {showReservation && (
        <ReservationWrapper>
          <h1>Hej! Här är din bokning, {booking.booker.firstname}!</h1>
          <ReservationDetails>
            <ReservationReference>
              <ReservationText weight="bold">Bokningsinformation</ReservationText>
              <ReservationText>Bokningsnummer: {booking._id}</ReservationText>
              <ReservationText>Datum: {booking.seatingDate}</ReservationText>
              <ReservationText>Tid: {booking.seatingTime}</ReservationText>
              <ReservationText>Antal gäster: {booking.guests}</ReservationText>
            </ReservationReference>

            <ReservationReference>
              <ReservationText weight="bold">Gästinformation</ReservationText>
              <ReservationText>
                Namn: {booking.booker.firstname} {booking.booker.lastname}
              </ReservationText>
              <ReservationText>Email: {booking.booker.email}</ReservationText>
              <ReservationText>Telefonnummer: {booking.booker.phone}</ReservationText>
            </ReservationReference>
          </ReservationDetails>
          <DeleteButton
            onClick={() => {
              if (booking._id) {
                handleDelete(booking._id);
              }
            }}
          >
            Avboka
          </DeleteButton>
        </ReservationWrapper>
      )}
      {showDeleted && (
        <DeletedWrapper>
          <DeletedText>Nu har din bokning har avbokats!</DeletedText>
        </DeletedWrapper>
      )}
    </>
  );
};
