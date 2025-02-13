import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://your-backend-url.com/api");

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
