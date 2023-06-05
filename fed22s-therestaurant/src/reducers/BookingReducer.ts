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

export const BookingReducer = (
  bookings: IBooking[],
  action: IAction
): IBooking[] => {
  switch (action.type) {
    case ActionType.CREATED: {
    }

    case ActionType.UPDATED: {
    }

    case ActionType.DELETED: {
    }

    case ActionType.GOT_ALL_BOOKINGS: {
    }

    case ActionType.GOT_ONE_BOOKING: {
    }
  }

  return bookings;
};
