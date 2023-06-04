import axios from "axios";
import { IBooking } from "../models/IBooking";
import { IBookingsResponse } from "../models/IBookingsResponse";

const BASE_URL = "http://localhost:4000/api/v1";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getBookings = async (): Promise<IBooking[]> => {
  const response = await axios
    .get<IBookingsResponse>("http://localhost:4000/api/v1/admin")
    .then((response) => response.data.data);
  return response;
};

export const getBooking = async (id: string): Promise<IBooking> => {
  return await get<IBooking>(`/admin/${id}`);
};

export const updateBooking = async (
  id: string,
  booking: IBooking
): Promise<IBooking> => {
  const response = await axios.put(`${BASE_URL}/admin/${id}`, {
    booker: {
      firstname: booking.booker.firstname,
      lastname: booking.booker.lastname,
      email: booking.booker.email,
      phone: booking.booker.phone,
    },
    guests: booking.guests,
    seatingTime: booking.seatingTime,
    seatingDate: booking.seatingDate,
    message: booking.message,
  });

  return response.data;
};
