import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { SubmitHandler, useForm, useController } from "react-hook-form";
import { number, z } from "zod";
import { IAmoutOfGuestsInput } from "../models/IAmoutOfGuestsInput";
import Select from "react-select";
import { IContactFormInput } from "../models/IContactFormInput";

const guestAmoutInputOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
];

const schema = z.object({
  amout: number().min(2, { message: "Du måste skriva ett efternamn som är minst två tecken långt" }),
});

export const AmoutOfGuestInput = () => {
  const { register, handleSubmit, control, formState } = useForm<IAmoutOfGuestsInput>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      amount: "",
    },
  });

  const { field } = useController({ name: "amount", control });
  const { errors } = formState;
  const onSubmit: SubmitHandler<IAmoutOfGuestsInput> = data => console.log(data);

  const handleSelectChange = (option: { value: typeof guestAmoutInputOptions }) => {
    field.onChange(option.value);
  };

  // const handleSave = (e: FormEvent) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Select
            value={guestAmoutInputOptions.find(({ value }) => value === field.value)}
            onChange={handleSelectChange}
            options={guestAmoutInputOptions}
            {...register("amount", {
              // pattern: X
            })}
            type="text"
            placeholder="amount"
          />
          <p>{errors.amount?.message}</p>
        </div>
      </form>
    </>
  );
};
