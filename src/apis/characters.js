import axios from "axios";
const BASE_URL = "https://breakingbadapi.com/api/characters";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
