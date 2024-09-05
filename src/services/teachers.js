import { axios } from "./axios-instance.js";
export const fetchClasses = async () => {
  const res = await axios.get("/classes");
  return res?.data;
};
