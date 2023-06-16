import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useController } from "react-hook-form";
import { number, z } from "zod";
import { IAmountOfGuestsInput } from "../../../../models/IAmountOfGuestsInput";
import Select, { SingleValue } from "react-select";
import { useContext } from "react";
import { CurrentBookingContext, CurrentBookingDispatchContext } from "../../../../contexts/CurrentBookingContext";
import { ActionType } from "../../../../reducers/CurrentBookingReducer";
import { AmountForm } from "../../../styled/Booking/BookingForm/AmountOfGuestsInput";

const guestAmountInputOptions = [
  { value: 1, label: "1 gäst" },
  { value: 2, label: "2 gäster" },
  { value: 3, label: "3 gäster" },
  { value: 4, label: "4 gäster" },
  { value: 5, label: "5 gäster" },
  { value: 6, label: "6 gäster" },
  { value: 7, label: "7 gäster" },
  { value: 8, label: "8 gäster" },
  { value: 9, label: "9 gäster" },
  { value: 10, label: "10 gäster" },
  { value: 11, label: "11 gäster" },
  { value: 12, label: "12 gäster" },
];

const schema = z.object({
  amout: number().min(2, { message: "Du måste skriva xxx" }),
});

export const AmountOfGuestsInput = () => {
  const currentBooking = useContext(CurrentBookingContext);
  const dispatch = useContext(CurrentBookingDispatchContext);

  const { control, formState } = useForm<IAmountOfGuestsInput>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      amount: "",
    },
  });

  const { field } = useController({ name: "amount", control });
  const { errors } = formState;

  const handleSelectChange = (selectedValue: SingleValue<{ value: number }>) => {
    selectedValue?.value;
    dispatch({
      type: ActionType.SELECTED_AMOUNT_OF_GUESTS,
      payload: selectedValue?.value,
    });
  };

  return (
    <>
      <AmountForm>
        <Select
          value={guestAmountInputOptions.find(({ value }) => value === field.value)}
          onChange={handleSelectChange}
          options={guestAmountInputOptions}
          placeholder="VÄLJ ANTAL PERSONER"
          defaultMenuIsOpen={true}
        />
        <p>{errors.amount?.message}</p>
      </AmountForm>
    </>
  );
};
