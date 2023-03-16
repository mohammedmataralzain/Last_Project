import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { PATHS } from "../../router";


const ProtectedRoute = () => {
  const { authorized } = useAuthContext();
  return (
    <div>
      {authorized ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </div>
  );
};

export default ProtectedRoute;