import axios from "axios";
import { IBooking } from "../models/IBooking";
import { IBookingsResponse } from "../models/IBookingsResponse";

const BASE_URL = "http://localhost:4000/api/v1";

export const createNewBooking = async (route: string, booking: IBooking) => {
  const response = await axios.post(`${BASE_URL}/${route}`, {
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

  return response;
};

export const getBookings = async (date?: string): Promise<IBooking[]> => {
  const url = date
    ? `${BASE_URL}/admin${`?seatingDate=${date}`}`
    : `${BASE_URL}/admin`;
  const response = await axios
    .get<IBookingsResponse>(url)
    .then((response) => response.data.data);
  return response;
};

export const getBooking = async (
  route: string,
  id: string
): Promise<IBooking> => {
  const response = await axios.get<IBooking>(`/${route}/${id}`);
  return response.data;
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

export const deleteBooking = async (route: string, id: string) => {
  const response = await axios.delete(`${BASE_URL}/${route}/${id}`);
  return response.status;
};
