import { useForm } from "react-hook-form";
import {
  CancelButton,
  GuestFormWrapper,
  Input,
  InputContainer,
  InputWrapper,
  MessageInput,
  NextButton,
  SmallContactHeading,
  ValidationError,
} from "../styled/Booking/BookingForm/GuestForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import {
  CurrentBookingContext,
  CurrentBookingDispatchContext,
} from "../../contexts/CurrentBookingContext";
import { ActionType } from "../../reducers/CurrentBookingReducer";

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
      <GuestFormWrapper>
        <form
          onSubmit={handleSubmit((data) => {
            dispatch({
              type: ActionType.ADDED_CONTACT_DETAILS,
              payload: data,
            });
          })}
        >
          <SmallContactHeading>Kontaktuppgifter</SmallContactHeading>

          <InputWrapper>
            <InputContainer>
              <Input {...register("firstname")} placeholder="FÖRNAMN" />
              <ValidationError>{errors.firstname?.message}</ValidationError>
            </InputContainer>
            <InputContainer>
              <Input {...register("lastname")} placeholder="EFTERNAMN" />
              <ValidationError>{errors.lastname?.message}</ValidationError>
            </InputContainer>
            <InputContainer>
              <Input
                {...register("phone")}
                placeholder="MOBILTELEFON (070 XXX XX XX)"
              />
              <ValidationError>{errors.phone?.message}</ValidationError>
            </InputContainer>
            <InputContainer>
              <Input {...register("email")} placeholder="EPOSTADRESS" />
              {/* Ändra tillbaka till type email när attrs funkar för det */}
              <ValidationError>{errors.email?.message}</ValidationError>
            </InputContainer>

            <MessageInput
              type="text"
              {...register("message")}
              placeholder="MEDDELA ALLERGIER ELLER ÖNSKEMÅL"
            ></MessageInput>
          </InputWrapper>

          <NextButton>Nästa</NextButton>
        </form>
      </GuestFormWrapper>
    </>
  );
};
