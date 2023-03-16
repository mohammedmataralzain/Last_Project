import React, { useReducer } from "react";

const useJobsReduser = () => {
  const initialState = {
    countSavedJobs: 0,
    jobsSaved: [],
  };

  const ACTIONS = {
    ADD_TO_JOB_SAVED: "addTOJobSaved",
    REMOVE_FROM_JOB_SAVED: "removeFromJobSaved",
  };
  const Reduce = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TO_JOB_SAVED:
        return {
          ...state,
          jobsSaved: [...state.jobsSaved, action.payload],
          countSavedJobs: state.countSavedJobs + 1,
        };
      case ACTIONS.REMOVE_FROM_JOB_SAVED:
        return {
          ...state,
          jobsSaved: [...state.jobsSaved.filter(job => job.id !== action.payload)],
          countSavedJobs: state.countSavedJobs - 1,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(Reduce, initialState);

  const addTOJobSaved = (product) => {
    dispatch({
        type : ACTIONS.ADD_TO_JOB_SAVED,
        payload : product
    })
  }
  const removeFromJobSaved = (id) => {
    dispatch({
        type : ACTIONS.REMOVE_FROM_JOB_SAVED,
        payload : id

    })
  }
  return {state,addTOJobSaved,removeFromJobSaved};
};

export default useJobsReduser;
