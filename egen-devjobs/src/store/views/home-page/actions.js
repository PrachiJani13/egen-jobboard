import { fetchJobs } from "../../../api/jobs";
import { ACTION_TYPES } from "./constants";

export const setJobs = (jobs) => {
  return {
    type: ACTION_TYPES.SET_JOBS,
    jobs,
  };
};

export const setMode = (lightMode) => {
  return {
    type: ACTION_TYPES.SET_MODE,
    lightMode,
  };
};

export const loadJobs = () => {
  return async (dispatch) => {
    try {
      const { data: jobs } = await fetchJobs();
      dispatch(setJobs(jobs));
    } catch (err) {
      console.error(err);
    }
  };
};
