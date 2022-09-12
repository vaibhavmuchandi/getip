import axios from "axios";
import endpoints from "./endpoints.js";

export const ipv4 = async () => {
  const { data } = await axios.get(endpoints.ipv4);
  return data;
};

export const ipv6 = async () => {
  const { data } = await axios.get(endpoints.ipv6);
  return data;
};
