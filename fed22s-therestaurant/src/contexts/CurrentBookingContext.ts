import { Dispatch, createContext } from "react";
import { IBooking } from "../models/IBooking";
import { IAction } from "../reducers/CurrentBookingReducer";

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
  _id: "",
});

export const CurrentBookingDispatchContext = createContext<Dispatch<IAction>>(
  () => {
    return;
  }
);
