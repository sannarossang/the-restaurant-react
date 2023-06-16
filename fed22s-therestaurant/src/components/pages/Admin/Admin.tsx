import { ChangeEvent, useContext, useEffect, useReducer, useState } from "react";
import { BookingContext, BookingDispatchContext, IBookingContext } from "../../../contexts/BookingContext";
import { ActionType, BookingReducer } from "../../../reducers/BookingReducer";
import { createNewBooking, getBookings } from "../../../services/BookingService";
import { defaultBookingValues } from "../../../models/defaultBookingValues";
import { AdminWrapper, CreateBookingBtn } from "../../styled/Admin/Admin";
import { BookingsTable } from "./AdminBooking/BookingsTable";
import { CurrentBookingContext, CurrentBookingDispatchContext } from "../../../contexts/CurrentBookingContext";
import { BookingForm } from "../../forms/BookingForm";
import { CurrentBookingReducer } from "../../../reducers/CurrentBookingReducer";
import { BookingSummary } from "../Booking/BookingForm/BookingSummary";
import { BookingConfirmation } from "../Booking/BookingForm/BookingConfirmation";
import { BookingModal, ExitButton, ModalContent, ModalNavWrapper, Title } from "../../styled/Booking/Booking";
import { Link } from "react-router-dom";

export const Admin = () => {
  const bookingStates: IBookingContext = {
    allBookings: [],
    filteredBooking: [],
    newBooking: defaultBookingValues,
  };

  const [searchText, setSearchText] = useState("");
  const [bookings, dispatch] = useReducer(BookingReducer, bookingStates);
  const [newBooking, currentDispatch] = useReducer(CurrentBookingReducer, defaultBookingValues);
  const [toggleView, setToggleView] = useState(false);

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

  const handleSearch = () => {
    if (searchText == "") {
      alert("Inga bokningar hittades");
    } else {
      dispatch({ type: ActionType.GOT_FILTERED_BOOKING, payload: searchText });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const toggle = () => {
    setToggleView(!toggleView);
  };

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}>
          <CurrentBookingContext.Provider value={newBooking}>
            <CurrentBookingDispatchContext.Provider value={currentDispatch}>
              <AdminWrapper>
                {!toggleView ? (
                  <>
                    <h1>Admin</h1>
                    <input type="text" onChange={handleChange}></input>
                    <button onClick={handleSearch}>Sök</button>
                    <div>
                      <CreateBookingBtn onClick={toggle}>Skapa ny bokning</CreateBookingBtn>
                    </div>

                    <BookingsTable />
                  </>
                ) : (
                  <BookingModal>
                    <ModalNavWrapper>
                      <Title>RESTAURANG BOOKER</Title>
                      <ExitButton onClick={toggle}>X</ExitButton>
                    </ModalNavWrapper>
                    <ModalContent>
                      {!newBooking.booker.email ? <BookingForm /> : <></>}
                      {newBooking.booker.email && !newBooking._id ? <BookingSummary /> : <></>}
                      {newBooking._id ? <BookingConfirmation /> : <></>}
                    </ModalContent>
                  </BookingModal>
                )}
              </AdminWrapper>
            </CurrentBookingDispatchContext.Provider>
          </CurrentBookingContext.Provider>
        </BookingDispatchContext.Provider>
      </BookingContext.Provider>
    </>
  );
};
