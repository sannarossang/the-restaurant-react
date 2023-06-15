import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Booking } from "./components/pages/Booking/Booking";
import { Admin } from "./components/pages/Admin/Admin";
import { Contact } from "./components/pages/Contact/Contact";
import { Reservation } from "./components/pages/Reservation/Reservation";
import { BookingConfirmation } from "./components/pages/Booking/BookingForm/BookingConfirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/reservation/:bookingId",
        element: <Reservation></Reservation>,
      },
      {
        path: "/confirmation",
        element: <BookingConfirmation></BookingConfirmation>,
      },
    ],
  },
]);
