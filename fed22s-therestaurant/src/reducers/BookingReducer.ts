import { IBookingContext } from "../contexts/BookingContext";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  CREATED,
  UPDATED,
  DELETED,
  GOT_ALL_BOOKINGS,
  GOT_ONE_BOOKING,
  GOT_FILTERED_BOOKING,
}

export const BookingReducer = (
  bookings: IBookingContext,
  action: IAction
): IBookingContext => {
  switch (action.type) {
    case ActionType.CREATED: {
    }

    case ActionType.UPDATED: {
    }

    case ActionType.DELETED: {
    }

    case ActionType.GOT_ALL_BOOKINGS: {
      return { ...bookings, allBookings: JSON.parse(action.payload) };
    }

    case ActionType.GOT_ONE_BOOKING: {
      return { ...bookings, filteredBooking: JSON.parse(action.payload) };
    }

    case ActionType.GOT_FILTERED_BOOKING: {
      const filtered = bookings.allBookings.filter(
        (booking) =>
          booking.booker.firstname.toLowerCase() === action.payload ||
          booking.booker.lastname.toLowerCase() === action.payload ||
          booking.booker.email.toLowerCase() === action.payload ||
          booking.booker.phone === action.payload ||
          booking.seatingDate.toString() === action.payload ||
          booking.seatingTime.toString() === action.payload ||
          booking.guests === +action.payload ||
          booking._id === action.payload
      );
      console.log("filtered", filtered);

      return { ...bookings, filteredBooking: filtered };
    }
  }

  return bookings;
};
