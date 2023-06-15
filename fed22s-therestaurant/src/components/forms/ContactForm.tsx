import { SubmitHandler, useForm } from "react-hook-form";
import { IContactFormInput } from "../../models/IContactFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import {
  ContactButton,
  ContactFormWrapper,
  ContactTitle,
  InputContactForm,
  InputContactWrapper,
  ValidationErrorContactForm,
} from "../styled/Contact/ContactForm";

const schema = z.object({
  firstname: string().min(2, {
    message: "Du måste skriva ett förnamn.",
  }),
  lastname: string().min(2, {
    message: "Du måste skriva ett efternamn.",
  }),
  email: string().email({ message: "Du måste skriva en korrekt emailadress" }),
  message: string().optional(),
});

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<IContactFormInput>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const { errors } = formState;
  const onSubmit: SubmitHandler<IContactFormInput> = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <ContactFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <ContactTitle>Kontakta oss</ContactTitle>
        <InputContactWrapper>
          <div>
            <InputContactForm {...register("firstname")} type="text" placeholder="FÖRNAMN" />
            <ValidationErrorContactForm>{errors.firstname?.message}</ValidationErrorContactForm>
          </div>
          <div>
            <InputContactForm {...register("lastname")} type="text" name="lastname" placeholder="EFTERNAMN" />
            <ValidationErrorContactForm>{errors.lastname?.message}</ValidationErrorContactForm>
          </div>

          <div>
            <InputContactForm {...register("email")} type="text" name="email" placeholder="EPOSTADRESS" />
            <ValidationErrorContactForm>{errors.email?.message}</ValidationErrorContactForm>
          </div>

          <div>
            <InputContactForm
              {...register("message", {
                maxLength: 20,
                minLength: {
                  value: 2,
                  message: "Du måste skriva minst två bokstäver",
                },
              })}
              type="text"
              name="message"
              placeholder="MEDDELANDE"
            />
            <ValidationErrorContactForm>{errors.message?.message}</ValidationErrorContactForm>
          </div>
        </InputContactWrapper>

        <div>
          <ContactButton type="submit">SKICKA</ContactButton>
        </div>
      </ContactFormWrapper>
    </>
  );
};
