import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IContactFormInput } from "../../models/IContactFormInput";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, dirtyFields, touchedFields, isValid },
  } = useForm<IContactFormInput>({
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<IContactFormInput> = data => console.log(data);

  //   const [submitted, setSubmitted] = useState(false);
  //   const handleSubmitNew = () => {
  //     setSubmitted(true);
  //   };

  //   if (submitted) {
  //     return (
  //       <>
  //         <h2>Thanks! We'll contact you asap!</h2>
  //       </>
  //     );
  //   }

  console.log(errors);
  console.log("dirtyFields", dirtyFields);
  console.log("touchedFields", touchedFields);
  console.log("isValid", isValid);

  useEffect(() => {
    console.log("useEffect", formState.errors);
  }, [formState]);

  return (
    <>
      <div>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstname", {
              required: "Du måste skriva ditt förnamn",
              pattern: /^[a-zA-Z]+$/,
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            placeholder="firstname"
          />
          <p>{errors.firstname?.message}</p>

          <input
            {...register("lastname", {
              required: "Du måste skriva ditt efternamn",
              pattern: /^[a-zA-Z]+$/,
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            name="lastname"
            placeholder="lastname"
          />
          <p>{errors.lastname?.message}</p>

          <input
            {...register("email", {
              required: "Du måste skriva din mejl",
              pattern: /^\S+@\S+$/i,
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            name="email"
            placeholder="email"
          />
          <p>{errors.email?.message}</p>

          <input
            {...register("message", {
              required: "Du måste skriva ditt meddelande",
              maxLength: 20,
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            name="message"
            placeholder="message"
          />
          <p>{errors.message?.message}</p>

          <div>
            <button type="submit">Contact us</button>
          </div>
        </form>
      </div>
    </>
  );
};
