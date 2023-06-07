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
}

export const CurrentBookingReducer = (
  booking: IBooking,
  action: IAction
): IBooking => {
  switch (action.type) {
    case ActionType.SELECTED_AMOUNT_OF_GUESTS: {
    }

    case ActionType.SELECTED_SEATING_DATE: {
    }

    case ActionType.SELECTED_SEATING_TIME: {
    }

    case ActionType.ADDED_CONTACT_DETAILS: {
    }
  }

  return booking;
};
