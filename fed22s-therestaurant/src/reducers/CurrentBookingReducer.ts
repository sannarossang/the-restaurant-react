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
      console.log("Reducer körs", action.payload);
      return { ...booking, guests: action.payload };
    }

    case ActionType.SELECTED_SEATING_DATE: {
      console.log("Reducer körs, selected seating date");
      return { ...booking, seatingDate: action.payload };
    }

    case ActionType.SELECTED_SEATING_TIME: {
      return { ...booking, seatingTime: action.payload };
    }

    case ActionType.ADDED_CONTACT_DETAILS: {
    }
  }

  return booking;
};
