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
