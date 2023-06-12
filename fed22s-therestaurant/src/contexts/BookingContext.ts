import { Dispatch, createContext } from "react";
import { IBooking } from "../models/IBooking";
import { IAction } from "../reducers/BookingReducer";
import { defaultBookingValues } from "../models/defaultBookingValues";

export interface IBookingContext {
  allBookings: IBooking[];
  filteredBooking: IBooking[];
  newBooking: IBooking;
}

export const BookingContext = createContext<IBookingContext>({
  allBookings: [],
  filteredBooking: [],
  newBooking: defaultBookingValues,
});

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
