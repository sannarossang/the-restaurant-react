import { useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <h2>Thanks! We'll contact you asap!</h2>
      </>
    );
  }
  return (
    <>
      <div>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Firstname" name="firstname" required />
          </div>
          <div>
            <input type="text" placeholder="Lastname" name="lastname" required />
          </div>
          <div>
            <input type="text" placeholder="Email" name="email" required />
          </div>
          <div>
            <input type="text" placeholder="Message" name="message" required />
          </div>
          <div>
            <button type="submit">Contact us</button>
          </div>
        </form>
      </div>
    </>
  );
};
