import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Booking } from "./components/pages/Booking";
import { Admin } from "./components/pages/Admin";
import { GuestInfo } from "./components/pages/GuestInfo";

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
        path: "/guestinfo",
        element: <GuestInfo></GuestInfo>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
    ],
  },
]);