import { useEffect, useReducer } from "react";
import { BookingContext, BookingDispatchContext } from "../../contexts/BookingContext";
import { ActionType, BookingReducer } from "../../reducers/BookingReducer";
import { getBookings } from "../../services/BookingService";

export const Admin = () => {
  const [bookings, dispatch] = useReducer(BookingReducer, []);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings();

      dispatch({ type: ActionType.GOT_ALL_BOOKINGS, payload: JSON.stringify(dataFromApi) });
    };

    if (bookings.length === 0) getData();
  }, [bookings]);

  console.log("boookings", bookings);

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
          {bookings.map(b => (
            <li key={b.booker.firstname}>{b.booker.firstname}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
