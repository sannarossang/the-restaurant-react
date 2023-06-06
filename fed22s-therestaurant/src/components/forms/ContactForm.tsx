import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useController } from "react-hook-form";
import { IContactFormInput } from "../../models/IContactFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

const schema = z.object({
  firstname: string().min(2, { message: "Du måste skriva ett efternamn som är minst två tecken långt" }),
  lastname: string().min(2, { message: "Du måste skriva ett efternamn som är minst två tecken långt" }),
  email: string().email({ message: "Du måste skriva en korrekt emailadress" }),
  message: string().optional(),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { dirtyFields, touchedFields, isValid },
  } = useForm<IContactFormInput>({
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
  const onSubmit: SubmitHandler<IContactFormInput> = data => console.log(data);

  return (
    <>
      <div>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("firstname", {
                pattern: /^[a-zA-Z]+$/, //funkar inte
              })}
              type="text"
              placeholder="firstname"
            />
            <p>{errors.firstname?.message}</p>
          </div>
          <div>
            <input
              {...register("lastname", {
                pattern: /^[a-zA-Z]+$/, //funkar inte
              })}
              type="text"
              name="lastname"
              placeholder="lastname"
            />
            <p>{errors.lastname?.message}</p>
          </div>

          <div>
            <input
              {...register("email", {
                pattern: /^\S+@\S+$/i,
              })}
              type="text"
              name="email"
              placeholder="email"
            />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <input
              {...register("message", {
                maxLength: 20,
                minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
              })}
              type="text"
              name="message"
              placeholder="message"
            />
            <p>{errors.message?.message}</p>
          </div>

          <div>
            <button type="submit">Contact us</button>
          </div>
        </form>
      </div>
    </>
  );
};
