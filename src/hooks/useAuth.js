import { useState } from "react";

const useAuth = () => {

  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setUsername("");
    setAuthorized(false);
  };

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    token,
    setToken,
    username,
    setUsername,
    logout,
  };
};

export default useAuth;