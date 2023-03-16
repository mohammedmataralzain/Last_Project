import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutForm from "../LayoutForm";
import { Select, StyledButton, StyledInput } from "../style";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import { object, string } from "yup";
import { PATHS } from "../../router";
import Loading from "../Loading";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const getData = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      const Countries = res.data;
      setItems(Countries);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const { loading, setLoading, setToken, setAuthorized } = useAuthContext();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const schema = object().shape({
    firstName: string()
      .min(6, "FirstName must be at least 6 characters")
      .max(12, "FirstName must be no more than 12 characters")
      .required("FirstName is required !"),
    lastName: string()
      .min(6, "LastName must be at least 6 characters")
      .max(12, "LastName must be no more than 16 characters")
      .required("LastName is required"),
    email: string().email("Invalid email").required("Email is required"),
    password: string().required("Password is required"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    schema
      .validate({ firstName, lastName, email, password }, { abortEarly: false })
      .then(async () => {
        const response = await axios.post(
          "https://react-tt-api.onrender.com/api/users/signup",
          {
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        if (response) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.name);
          setToken(response.data.token);
          setLoading(false);
          setAuthorized(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        const errors = {};
        error.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      });
  };

  return (
    <LayoutForm title="Sign up to find work you love" width="60rem">
      <form onSubmit={(e) => handleSubmit(e)}>
        <StyledInput
          type="text"
          placeholder="First Name"
          id="FirstName"
          name="FirstName"
          width="100%"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        {errors.firstName && <div className="errors">{errors.firstName}</div>}

        <StyledInput
          type="text"
          placeholder="Last Name"
          id="LastName"
          onChange={(event) => setLastName(event.target.value)}
          name="LastName"
          width="100%"
          value={lastName}
        />
        {errors.lastName && <div className="errors">{errors.lastName}</div>}

        <StyledInput
          type="email"
          placeholder="Email"
          id="email"
          width="100%"
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          value={email}
        />
        {errors.email && <div className="errors">{errors.email}</div>}

        <StyledInput
          type="password"
          placeholder="Password (8 or more characters)"
          id="password"
          width="100%"
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          value={password}
        />

        {errors.password && <div className="errors">{errors.password}</div>}

        <Select name="" id="">
          {items.map((item, index) => (
            <option key={index}>{item.name.common}</option>
          ))}
        </Select>
        <StyledButton type="submit" backGround="green" width="100%">
        {loading ? <Loading/> : "Create my account"}
        </StyledButton>
        <p>
          Already have an account?{" "}
          <Link to="/Login">
            <span>Log in</span>
          </Link>
        </p>
      </form>
    </LayoutForm>
  );
};

export default SignUpForm;
