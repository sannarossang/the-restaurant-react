import axios from "axios";
import { IBooking } from "../models/IBooking";
import { IBookingsResponse } from "../models/IBookingsResponse";

const BASE_URL = "http://localhost:4000/api/v1";
/* Hur ska vi göra med admin/booker-routes? Behöver man verkligen ha samma funktioner på båda?
Isåfall får vi lägga till en variabel för route här också typ. */

/* Provade det här med "get" nedanför pga såg att Sebbe gjort så i en demo, men känns lite onödigt i det här fallet pga
används bara till en funktion?
Eller så kan man använda nåt sånt här för alla request och dela upp det i två filer så det blir lite
mer clean kod. Inte hunnit tänka klart den tanken helt :) */
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

/* Tänker att "booking" ska komma från ett state, så att man sparar den bokning man klickat på i ett state och 
sen behöver man bara ändra det man ska ändra och så kommer resten vara samma i statet. Känns DOCK som att det
här blir samma kod som i backend? Kanske går att reducera koden i backend lite nu eftersom vi alltid kommer
skicka med ett helt ifyllt boknings-objekt? */
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

export const deleteBooking = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/admin/${id}`);
  return response.status;
};
