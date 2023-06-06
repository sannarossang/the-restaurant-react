import { useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "Sebastian",
      lastname: "Tegel",
      email: "sebbe@tegel.com",
      message: "Älskar er restaurang, men...",
    },
  });

  //   const [submitted, setSubmitted] = useState(false);
  //   const handleSubmit = () => {
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

  return (
    <>
      <div>
        <h1>Contact us</h1>
        <form
          onSubmit={handleSubmit(data => {
            console.log(data);
          })}
        >
          <input
            {...register("firstname", {
              required: "Du måste skriva ditt förnamn",
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
          />
          <p>{errors.firstname?.message}</p>

          <input
            {...register("lastname", {
              required: "Du måste skriva ditt efternamn",
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            name="lastname"
          />
          <p>{errors.lastname?.message}</p>

          <input
            {...register("email", {
              required: "Du måste skriva din mejl",
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            name="email"
          />
          <p>{errors.email?.message}</p>

          <input
            {...register("message", {
              required: "Du måste skriva ditt meddelande",
              minLength: { value: 2, message: "Du måste skriva minst två bokstäver" },
            })}
            type="text"
            name="message"
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
