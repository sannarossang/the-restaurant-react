import { useForm } from "react-hook-form";
import {
  GuestInput,
  MessageInput,
  StyledGuestForm,
} from "../styled/Forms/GuestForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../contexts/CurrentBookingContext";
import { ActionType } from "../../reducers/CurrentBookingReducer";
import { IBooking } from "../../models/IBooking";
import { createNewBooking } from "../../services/BookingService";

const validationSchema = z.object({
  firstname: z.string().min(1, { message: "Du måste ange ditt förnamn." }),
  lastname: z.string().min(1, { message: "Du måste ange ditt efternamn." }),
  phone: z
    .string()
    .min(1, { message: "Du måste ange ett mobilnummer" })
    .min(10, { message: "Mobilnumret ska vara i formatet: 070 XXX XX XX" })
    .max(10, { message: "Mobilnumret ska vara i formatet: 070 XXX XX XX" }),
  email: z
    .string()
    .min(1, { message: "Du måste ange din email." })
    .email({ message: "Du måste ange en email i rätt format." }),
  message: z.string(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const GuestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const dispatch = useContext(CurrentBookingDispatchContext);
  const currentbooking = useContext(CurrentBookingContext);

  return (
    <>
      <StyledGuestForm
        onSubmit={handleSubmit((data) => {
          dispatch({
            type: ActionType.ADDED_CONTACT_DETAILS,
            payload: data,
          });
          // createNewBooking("booker", currentbooking);
        })}
      >
        <GuestInput
          type="text"
          {...register("firstname")}
          placeholder="Förnamn"
        ></GuestInput>
        <p>{errors.firstname?.message}</p>

        <GuestInput
          type="text"
          {...register("lastname")}
          placeholder="Efternamn"
        ></GuestInput>
        <p>{errors.lastname?.message}</p>
        <GuestInput
          type="text"
          {...register("phone")}
          placeholder="070 XXX XX XX"
        ></GuestInput>
        <p>{errors.phone?.message}</p>
        <GuestInput
          type="email"
          {...register("email")}
          placeholder="emailadress@gmail.com"
        ></GuestInput>
        <p>{errors.email?.message}</p>

        <MessageInput
          type="text"
          {...register("message")}
          placeholder="Eventuella allergier eller andra önskemål"
        ></MessageInput>
        <button>Nästa</button>
      </StyledGuestForm>
    </>
  );
};
