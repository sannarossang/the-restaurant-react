import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Booking } from "./components/pages/Booking";
import { Admin } from "./components/pages/Admin";
import { Contact } from "./components/pages/Contact";
import { Reservation } from "./components/pages/Reservation";
import { BookingConfirmation } from "./components/BookingConfirmation";

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
        path: "/reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/confirmation",
        element: <BookingConfirmation></BookingConfirmation>,
      },
    ],
  },
]);
