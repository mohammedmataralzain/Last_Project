import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LayoutForm from "../LayoutForm";
import { Or, StyledButton, StyledInput } from "../style";
import { StyleBoxPassword } from "./styled";
import { object, string } from "yup";
import { PATHS } from "../../router";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";

const LoginForm = () => {
  const { loading, setLoading,setToken, setAuthorized } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [eye, setEye] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const schema = object().shape({
    email: string().email("Invalid email").required("Email is required"),
    password: string().required("Password is required"),
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    schema
    .validate(
      {email,password},
      { abortEarly: false }
    )
    .then(async () => {
      const response = await axios.post('https://react-tt-api.onrender.com/api/users/login', {
        email : email,
        password : password,
      });
      console.log(response.data);
      if (response) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        setToken(response.data.token);
        setLoading(false);
        setAuthorized(true);
        Navigate(PATHS.HOME)
      }}).catch((error) => {
        setLoading(false);
        const errors = {};
        error.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      });
  };

  return (
    <LayoutForm title="Login in to Up work" width="38rem">
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {errors.email && <div className="errors">{errors.email}</div>}
        <StyleBoxPassword>
          <StyledInput
            type={eye ? "text" : "password"}
            placeholder="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span className="eye_open" onClick={() => setEye((prev) => !prev)}>
            {eye ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width="2rem"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2.5c-3.182 0-5.918 2.067-7 5 1.082 2.933 3.818 5 7 5s5.918-2.067 7-5c-1.082-2.933-3.818-5-7-5zm0 8.333c-1.782 0-3.182-1.466-3.182-3.333 0-1.867 1.4-3.333 3.182-3.333s3.182 1.466 3.182 3.333c0 1.867-1.4 3.333-3.182 3.333zM7 5.5c-1.082 0-1.91.867-1.91 2s.828 2 1.91 2c1.082 0 1.91-.867 1.91-2s-.828-2-1.91-2z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-name="Layer 1"
                viewBox="0 0 14 14"
                role="img"
                width="2rem"
              >
                <path d="M7 3.2a3.23 3.23 0 013.19 3.34A3.59 3.59 0 0110 7.68l1.93 1.93A7.79 7.79 0 0014 6.54a7.49 7.49 0 00-7-5 7.2 7.2 0 00-2.63.51l1.4 1.41A3 3 0 017 3.2zm3.87 7.2L9.31 8.84l-.92-.91-2.77-2.78-.92-.92-1.56-1.56L.92.45 0 1.37l2.09 2.1A7.85 7.85 0 000 6.54a7.53 7.53 0 007 5A7 7 0 009.63 11l2.54 2.54.92-.92-2.23-2.22zM7 9.87a3.23 3.23 0 01-3.18-3.33A3.5 3.5 0 014 5.4l1.1 1.08v.06a1.93 1.93 0 001.9 2h.14l1.09 1.07A3.11 3.11 0 017 9.87z"></path>
                <path d="M6.86 4.55L8.91 6.6v-.06a1.91 1.91 0 00-1.91-2z"></path>
              </svg>
            )}
          </span>
        </StyleBoxPassword>
        {errors.password && <div className="errors">{errors.password}</div>}

        <StyledButton type="submit" backGround="green" width="25rem">
          {loading ? <Loading/> : "Continue with Email "}
        </StyledButton>
        <Or> Don't have an Upwork account?</Or>
        <Link to="/Signup">
          <StyledButton
            type="button"
            backGround="#ffffff"
            width="22rem"
            color="green"
            borderColor="green"
          >
            Sign Up
          </StyledButton>
        </Link>
      </form>
    </LayoutForm>
  );
};

export default LoginForm;
