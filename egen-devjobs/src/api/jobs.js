import axios from "axios";

export const fetchJobs = () => {
  return axios.get("/positions.json");
};
