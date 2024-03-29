import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}api`,
  headers,
});

export default api;
