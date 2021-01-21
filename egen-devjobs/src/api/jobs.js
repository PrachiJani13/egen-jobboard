import axios from "axios";
// import * as tunnel from 'tunnel';

export const fetchJobs = () => {
  return axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",{
    proxy: {
      host: '',
      port:443
    }})
  };
  

 