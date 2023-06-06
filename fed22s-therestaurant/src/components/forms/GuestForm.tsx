import { useForm } from "react-hook-form";
import { GuestInput, StyledGuestForm } from "../styled/Forms/GuestForm";

export const GuestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <StyledGuestForm
        onSubmit={handleSubmit(() => {
          console.log(errors);
        })}
      >
        <GuestInput
          type="text"
          {...register("firstname", {
            required: "Du måste ange ditt förnamn.",
          })}
          placeholder="Förnamn"
        ></GuestInput>

        <GuestInput
          {...register("lastname", {
            required: "Du måste ange ditt efternamn.",
          })}
          placeholder="Efternamn"
        ></GuestInput>
        <GuestInput
          {...register("phone")}
          placeholder="070 XXX XX XX"
        ></GuestInput>
        <GuestInput
          {...register("email", {
            required: "Du måste ange din email.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Du måste ange rätt en email i rätt format. ",
            },
          })}
          placeholder="förnamn.efternam@email.com"
        ></GuestInput>

        <button>Spara</button>
      </StyledGuestForm>
    </>
  );
};
