import { useEffect, useReducer } from "react";
import { BookingContext, BookingDispatchContext } from "../../contexts/BookingContext";
import { ActionType, BookingReducer } from "../../reducers/BookingReducer";
import { getBookings } from "../../services/BookingService";

export const Admin = () => {
  const bookingStates = {
    allBookings: [],
    filteredBooking: [],
  };

  const [bookings, dispatch] = useReducer(BookingReducer, bookingStates);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings();

      dispatch({ type: ActionType.GOT_ALL_BOOKINGS, payload: JSON.stringify(dataFromApi) });
    };

    if (bookings.allBookings.length === 0) getData();
  }, [bookings]);

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}></BookingDispatchContext.Provider>
      </BookingContext.Provider>
      <h1>Admin</h1>
      <input type="text"></input>
      <div>
        <p>Resultat</p>
        <ul>
          {bookings.allBookings.map(b => (
            <li key={b.booker.firstname}>{b.booker.firstname}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
