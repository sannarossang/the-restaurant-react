import { createContext } from "react";
import { IBooking } from "../models/IBooking";

export const CurrentBookingContext = createContext<IBooking>({
  booker: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  },

  guests: 0,
  message: "",
  seatingTime: "",
  seatingDate: new Date(),
});

export const CurrentBookingDispatchContext = createContext<Dispatch<IAction>>(() => return);
