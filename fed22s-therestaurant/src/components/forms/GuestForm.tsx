import { useForm } from "react-hook-form";
import { GuestInput, StyledGuestForm } from "../styled/Forms/GuestForm";

export const GuestForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <StyledGuestForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <GuestInput
          {...register("firstname")}
          placeholder="Förnamn"
        ></GuestInput>
        <GuestInput
          {...register("lastname")}
          placeholder="Efternamn"
        ></GuestInput>
        <GuestInput
          {...register("phone")}
          placeholder="070 XXX XX XX"
        ></GuestInput>
        <GuestInput
          {...register("email")}
          placeholder="förnamn.efternam@email.com"
        ></GuestInput>
      </StyledGuestForm>
    </>
  );
};
