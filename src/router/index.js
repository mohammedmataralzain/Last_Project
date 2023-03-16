


import Error from "../components/Error";
import ProtectedRoute from "../components/ProtectedRoute";


import React, { lazy } from "react";
import { Suspense } from "react";


import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";


const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Profile = lazy(() => import("../pages/Profile"));
const JobDetails = lazy(() => import("../pages/JobDetails"));

export const PATHS = {
  HOME: "/home",
  JOB_DETAILS: "/JobDetails",
  LOGIN: "/Login",
  SIGNUP: "/SignUp",
  PROFILE: "/Profile",
  SEARCH: "/Search",
  ERROR: "*",
};


const Routers = () => {
  const { authorized, setAuthorized, setToken } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
      setAuthorized(true);
    }
  }, [setToken, setAuthorized]);
return(
  <Suspense fallback={<Loading />}>
  <Routes>
        <Route index element={<Navigate to={PATHS.LOGIN} />} />
        <Route
          path={PATHS.LOGIN}
          element={authorized ? <Navigate to={PATHS.HOME} /> : <Login />}
        />
        <Route
          path={PATHS.SIGNUP}
          element={authorized ? <Navigate to={PATHS.HOME} /> : <SignUp />}
        />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.PROFILE} element={<Profile />} />
          <Route path={PATHS.JOB_DETAILS} element={<JobDetails />} />
          <Route path="redirect" element={<Navigate to={"/profile"} />} />
          <Route path={PATHS.SEARCH} element={<Search />} />
        </Route>
        <Route path={PATHS.ERROR} element={<Error/>} />
      </Routes>
      </Suspense>
)
};

export default Routers;
