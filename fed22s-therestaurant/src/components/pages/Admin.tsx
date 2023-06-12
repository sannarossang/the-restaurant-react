import { Action } from "@remix-run/router";
import {
  ChangeEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { boolean } from "zod";
import {
  BookingContext,
  BookingDispatchContext,
  IBookingContext,
} from "../../contexts/BookingContext";
import { ActionType, BookingReducer } from "../../reducers/BookingReducer";
import { deleteBooking, getBookings } from "../../services/BookingService";
import { defaultBookingValues } from "../../models/defaultBookingValues";
import { CreateBookingBtn } from "../styled/Admin/Admin";
import { BookingsTable } from "../BookingsTable";
import { IBooking } from "../../models/IBooking";

export const Admin = () => {
  const bookingStates: IBookingContext = {
    allBookings: [],
    filteredBooking: [],
    newBooking: defaultBookingValues,
  };

  const [searchText, setSearchText] = useState("");
  const [bookings, dispatch] = useReducer(BookingReducer, bookingStates);
  const [bookingsToDisplay, setBookingsToDisplay] = useState<IBooking[]>([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await getBookings();

      dispatch({
        type: ActionType.GOT_ALL_BOOKINGS,
        payload: JSON.stringify(dataFromApi),
      });

      setBookingsToDisplay([...dataFromApi]);
    };
    if (bookings.allBookings.length === 0) getData();
  }, [bookings]);

  useEffect(() => {
    if (bookings.filteredBooking.length > 0) {
      setBookingsToDisplay(bookings.filteredBooking);
    }
  });

  const handleSearch = () => {
    if (searchText == "") {
      alert("Inga bokningar hittades");
    } else {
      dispatch({ type: ActionType.GOT_FILTERED_BOOKING, payload: searchText });
      setBookingsToDisplay([...bookings.filteredBooking]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}>
          <h1>Admin</h1>
          <input type="text" onChange={handleChange}></input>
          <button onClick={handleSearch}>Sök</button>
          <div>
            <CreateBookingBtn>Skapa ny bokning</CreateBookingBtn>
          </div>

          <BookingsTable bookings={bookingsToDisplay} />
        </BookingDispatchContext.Provider>
      </BookingContext.Provider>
    </>
  );
};
