import { ChangeEvent, useEffect, useReducer, useState } from "react";
import {
  BookingContext,
  BookingDispatchContext,
} from "../../contexts/BookingContext";
import { ActionType, BookingReducer } from "../../reducers/BookingReducer";
import { getBookings } from "../../services/BookingService";

export const Admin = () => {
  const bookingStates = {
    allBookings: [],
    filteredBooking: [],
  };

  const [searchText, setSearchText] = useState("");
  const [bookings, dispatch] = useReducer(BookingReducer, bookingStates);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings();

      dispatch({
        type: ActionType.GOT_ALL_BOOKINGS,
        payload: JSON.stringify(dataFromApi),
      });
    };

    if (bookings.allBookings.length === 0) getData();
  }, [bookings]);

  const handleSearch = async () => {
    if (searchText == "") {
      alert("Inga bokningar hittades");
    } else {
      dispatch({ type: ActionType.GOT_FILTERED_BOOKING, payload: searchText });
    }
  };
  // if (bookings.allBookings.length === 0) handleSearch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  console.log(bookings.filteredBooking);
  console.log("Searchtext", searchText);

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider
          value={dispatch}
        ></BookingDispatchContext.Provider>
      </BookingContext.Provider>
      <h1>Admin</h1>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleSearch}>Sök</button>
      <div>
        <p>Bokningar</p>
        <ul>
          {bookings.filteredBooking.map((b) => (
            <li key={b._id}>{b.booker.firstname}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
