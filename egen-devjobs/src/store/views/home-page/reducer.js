import { ACTION_TYPES } from "./constants";

const initialState = {
  jobs: [],
  currentJob: null,
  lightMode: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };

    case ACTION_TYPES.SET_MODE:
      return {
        ...state,
        lightMode: action.lightMode,
      };

    default:
      return state;
  }
};

export default reducer;
