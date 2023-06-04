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

export const getBooking = async (): Promise<IBooking> => {
  return await get<IBooking>("/admin/64784e9f49ae597d8c4f9c7f");
};
