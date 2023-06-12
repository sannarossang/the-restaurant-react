import { Action } from "@remix-run/router";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { boolean } from "zod";
import { BookingContext, BookingDispatchContext } from "../../contexts/BookingContext";
import { defaultBookingValues } from "../../models/defaultBookingValues";
import { ActionType, BookingReducer } from "../../reducers/BookingReducer";
import { deleteBooking, getBookings } from "../../services/BookingService";

export const Admin = () => {
  const bookingStates = {
    allBookings: [],
    filteredBooking: [],
    newBooking: defaultBookingValues,
  };

  const [searchText, setSearchText] = useState("");
  const [bookings, dispatch] = useReducer(BookingReducer, bookingStates);
  const [showAllBookings, setshowAllBookings] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings();

      dispatch({
        type: ActionType.GOT_ALL_BOOKINGS,
        payload: JSON.stringify(dataFromApi),
      });
      setshowAllBookings(true);
    };
    if (bookings.allBookings.length === 0) getData();
  }, [bookings]);

  const handleSearch = () => {
    if (searchText == "") {
      alert("Inga bokningar hittades");
    } else {
      dispatch({ type: ActionType.GOT_FILTERED_BOOKING, payload: searchText });
    }
    setshowAllBookings(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleDelete = (id: string) => {
    dispatch({ type: ActionType.DELETED, payload: id });
    deleteBooking("admin", id);
  };

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}>
          <h1>Admin</h1>
          <input type="text" onChange={handleChange}></input>
          <button onClick={handleSearch}>Sök</button>
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
              {bookings.filteredBooking.map(b => (
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
                </tr>
              ))}
            </table>
          </div>
          {showAllBookings && (
            <div>
              {bookings.allBookings.map(b => (
                <>
                  <li key={b._id}>
                    {b.booker.firstname}
                    <button onClick={() => handleDelete(b._id)}>X</button>
                  </li>
                </>
              ))}
            </div>
          )}
          {!showAllBookings && (
            <div>
              {bookings.filteredBooking.map(b => (
                <>
                  <li key={b._id}>
                    {b.booker.firstname}
                    <button onClick={() => handleDelete(b._id)}>X</button>
                  </li>
                </>
              ))}
            </div>
          )}
        </BookingDispatchContext.Provider>
      </BookingContext.Provider>
    </>
  );
};
