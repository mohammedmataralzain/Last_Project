import axios from "axios";
import { createContext, useContext, useState } from "react";
import useJobsReduser from "../hooks/useJobsReduser";

const JobsContext = createContext(null);

const JobsProvider = ({ children }) => {
  const [JobsSearch, setJobsSearch] = useState([]);
  const JobsReduser = useJobsReduser()
  
  const SetData = (searchData) => {
    setJobsSearch(searchData);
  };
  return (
    <JobsContext.Provider
      value={{
        JobsSearch,
        SetData,
        JobsReduser
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobsContext = () => {
  return useContext(JobsContext);
};

export { JobsProvider };
