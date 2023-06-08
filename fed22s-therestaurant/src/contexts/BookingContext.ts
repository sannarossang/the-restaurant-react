import { Dispatch, createContext } from "react";
import { IBooking } from "../models/IBooking";
import { IAction } from "../reducers/BookingReducer";

export interface IBookingContext {
  allBookings: IBooking[];
  filteredBooking: IBooking[];
}

export const BookingContext = createContext<IBookingContext>({
  allBookings: [],
  filteredBooking: [],
});

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
