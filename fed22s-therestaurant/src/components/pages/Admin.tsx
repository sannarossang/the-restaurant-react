import { Action } from "@remix-run/router";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
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
  const [bookingsToView, setBookingsToView] = useState(bookings.allBookings);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings();
      console.log("useffect körs");

      dispatch({
        type: ActionType.GOT_ALL_BOOKINGS,
        payload: JSON.stringify(dataFromApi),
      });
      setBookingsToView(dataFromApi);
    };
    if (bookings.allBookings.length === 0) getData();
  }, [bookings]);

  const handleSearch = async () => {
    if (searchText == "") {
      alert("Inga bokningar hittades");
    } else {
      dispatch({ type: ActionType.GOT_FILTERED_BOOKING, payload: searchText });
    }
    setBookingsToView(bookings.filteredBooking);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  const handleDelete = (id: string) => {
    dispatch({ type: ActionType.DELETED, payload: id });
    // deleteBooking("admin", id);
    console.log(id, "is deleted");
  };

  console.log(bookings.filteredBooking);
  console.log("Searchtext", searchText);

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}>
          <h1>Admin</h1>
          <input type="text" onChange={handleChange}></input>
          <button onClick={handleSearch}>Sök</button>
          <div>
            <p>Bokningar</p>
            {bookingsToView.map(b => (
              <>
                <li key={b._id}>
                  {b.booker.firstname}
                  <button onClick={() => handleDelete(b._id)}>X</button>
                </li>
              </>
            ))}
          </div>
        </BookingDispatchContext.Provider>
      </BookingContext.Provider>
    </>
  );
};
