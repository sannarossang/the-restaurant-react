import { useContext } from "react";
import { IBooking } from "../models/IBooking";
import { BookingDispatchContext } from "../contexts/BookingContext";
import { deleteBooking } from "../services/BookingService";
import { ActionType } from "../reducers/BookingReducer";

interface IBookingsTableProps {
  bookings: IBooking[];
}

export const BookingsTable = ({ bookings }: IBookingsTableProps) => {
  const dispatch = useContext(BookingDispatchContext);

  const handleDelete = (id: string) => {
    dispatch({ type: ActionType.DELETED, payload: id });
    deleteBooking("admin", id);
  };
  console.log("Bookings table", bookings);
  return (
    <>
      <div>
        <p>Bokningar</p>
        <table>
          <tr>
            <th>Bokningsnummer</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Antal gäster</th>
            <th>Datum</th>
            <th>Tid</th>
            <th>Meddelande</th>
          </tr>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td>{b._id}</td>
              <td>{b.booker.firstname}</td>
              <td>{b.booker.lastname}</td>
              <td>{b.booker.email}</td>
              <td>{b.booker.phone}</td>
              <td>{b.guests}</td>
              <td>{b.seatingTime}</td>
              <td>{b.seatingDate}</td>
              <td>{b.message}</td>
              <button onClick={() => handleDelete(b._id)}>X</button>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
