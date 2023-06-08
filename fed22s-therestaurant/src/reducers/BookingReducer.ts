import { IBookingContext } from "../contexts/BookingContext";
import { IBooking } from "../models/IBooking";

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
}

export const BookingReducer = (bookings: IBookingContext, action: IAction): IBookingContext => {
  switch (action.type) {
    case ActionType.CREATED: {
    }

    case ActionType.UPDATED: {
    }

    case ActionType.DELETED: {
    }

    case ActionType.GOT_ALL_BOOKINGS: {
      return JSON.parse(action.payload);
    }

    case ActionType.GOT_ONE_BOOKING: {
    }
  }

  return bookings;
};
