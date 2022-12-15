import axios from "axios";
import { endpoints } from "./Endpoints";

const { baseUrl } = endpoints;

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
