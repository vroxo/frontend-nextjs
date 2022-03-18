import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST
});

export default http;