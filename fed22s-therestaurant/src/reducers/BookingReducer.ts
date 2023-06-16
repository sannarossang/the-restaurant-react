import { IBookingContext } from "../contexts/BookingContext";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  DELETED,
  GOT_ALL_BOOKINGS,
  GOT_ONE_BOOKING,
  GOT_FILTERED_BOOKING,
  SELECTED_AMOUNT_OF_GUESTS,
  SELECTED_SEATING_DATE,
  SELECTED_SEATING_TIME,
  ADDED_CONTACT_DETAILS,
}

export const BookingReducer = (bookings: IBookingContext, action: IAction): IBookingContext => {
  switch (action.type) {
    case ActionType.DELETED: {
      const deleted = bookings.allBookings.filter(booking => booking._id !== action.payload);
      const filtered = bookings.filteredBooking.filter(booking => booking._id !== action.payload);

      return { ...bookings, allBookings: deleted, filteredBooking: filtered };
    }

    case ActionType.GOT_ALL_BOOKINGS: {
      return {
        ...bookings,
        allBookings: JSON.parse(action.payload),
        filteredBooking: JSON.parse(action.payload),
      };
    }

    case ActionType.GOT_ONE_BOOKING: {
      return { ...bookings, filteredBooking: JSON.parse(action.payload) };
    }

    case ActionType.GOT_FILTERED_BOOKING: {
      const filtered = bookings.allBookings.filter(
        booking =>
          booking.booker.firstname.toLowerCase() === action.payload.toLowerCase() ||
          booking.booker.lastname.toLowerCase() === action.payload.toLowerCase() ||
          booking.booker.email.toLowerCase() === action.payload.toLowerCase() ||
          booking.booker.phone === action.payload ||
          booking.seatingDate === action.payload ||
          booking.seatingTime === action.payload ||
          booking.guests === +action.payload ||
          booking._id === action.payload
      );
      return { ...bookings, filteredBooking: filtered };
    }
  }

  return bookings;
};

export const NewBookingReducer = (bookings: IBookingContext, action: IAction): IBookingContext => {
  switch (action.type) {
    case ActionType.SELECTED_AMOUNT_OF_GUESTS: {
      const booking = { ...bookings.newBooking };
      booking.guests = +action.payload;
      return { ...bookings, newBooking: booking };
    }
  }

  return bookings;
};
