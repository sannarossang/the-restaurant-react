import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};
