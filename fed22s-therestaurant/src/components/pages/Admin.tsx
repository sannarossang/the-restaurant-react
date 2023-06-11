import { Action } from "@remix-run/router";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { boolean } from "zod";
import { BookingContext, BookingDispatchContext } from "../../contexts/BookingContext";
import { ActionType, BookingReducer } from "../../reducers/BookingReducer";
import { deleteBooking, getBookings } from "../../services/BookingService";

export const Admin = () => {
  const bookingStates = {
    allBookings: [],
    filteredBooking: [],
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
          <p>Bokningar</p>
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
