import { Dispatch, createContext } from "react";
import { IBooking } from "../models/IBooking";

export const BookingContext = createContext<IBooking[]>([]);

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
