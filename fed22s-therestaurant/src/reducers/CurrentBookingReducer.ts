import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  SELECTED_AMOUNT_OF_GUESTS,
  SELECTED_SEATING_DATE,
  SELECTED_SEATING_TIME,
  ADDED_CONTACT_DETAILS,
  GOT_BOOKING_ID,
  DELETED,
}

export const CurrentBookingReducer = (
  booking: IBooking,
  action: IAction
): IBooking => {
  switch (action.type) {
    case ActionType.SELECTED_AMOUNT_OF_GUESTS: {
      return { ...booking, guests: action.payload };
    }

    case ActionType.SELECTED_SEATING_DATE: {
      return { ...booking, seatingDate: action.payload };
    }

    case ActionType.SELECTED_SEATING_TIME: {
      return { ...booking, seatingTime: action.payload };
    }

    case ActionType.ADDED_CONTACT_DETAILS: {
      return {
        ...booking,
        booker: {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          phone: action.payload.phone,
          email: action.payload.email,
        },
        message: action.payload.message,
      };
    }

    case ActionType.GOT_BOOKING_ID: {
      return { ...booking, _id: action.payload };
    }
  }

  return booking;
};
