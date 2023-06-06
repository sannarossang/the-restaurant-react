import { useForm } from "react-hook-form";
import { GuestInput, StyledGuestForm } from "../styled/Forms/GuestForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  firstname: z.string().min(1, { message: "Du måste ange ditt förnamn." }),
  lastname: z.string().min(1, { message: "Du måste ange ditt efternamn." }),
  phone: z
    .string()
    .min(10, { message: "Du måste ange ett mobilnummer: 070 XXX XX XX" })
    .max(10, { message: "Du måste ange ett mobilnummer: 070 XXX XX XX" }),
  email: z
    .string()
    .min(1, { message: "Du måste ange din email." })
    .email({ message: "Du måste ange en email i rätt format. " }),
});

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
          type="text"
          {...register("lastname", {
            required: "Du måste ange ditt efternamn.",
          })}
          placeholder="Efternamn"
        ></GuestInput>
        <GuestInput
          type="text"
          {...register("phone")}
          placeholder="070 XXX XX XX"
        ></GuestInput>
        <GuestInput
          type="email"
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
