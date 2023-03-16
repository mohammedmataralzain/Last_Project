import  { useState, useContext, createContext } from "react";


const initialState = {
  isPopOpen1: false,
  isPopOpen2: false,
  isPopOpen3: false,
}
const AppContext = createContext('');
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  
  const updateIsPopOpen = (type) => {
    setState({ ...state, [type]: true });
  };

  const closeIsPopOpen = (type) => {
    setState({ ...state, [type]: false });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        updateIsPopOpen,
        closeIsPopOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };