import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/ModelContext";
import { StyledButton } from "../style";
import { StyleOverView } from "./styled";

const itemOverView = [
  "Describe your strengths and skills",
  "Highlight projects, accomplishments and education",
  "Keep it short and make sure it's error-free",
];

const Overview = ({type}) => {
const data = useGlobalContext()

  const [Title, setTitle] = useState("");
  const [newOverView, setNewOverView] = useState("");
  const [hourlyRate, setRate] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/personalInformation"
        );
        if (response) {
          setTitle(response.data[0].title);
          setNewOverView(response.data[0].overview);
          setRate(response.data[0].hourlyRate);
        }
      } catch (err) {
      }
    })();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewOverView(value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await axios.put(
          "http://localhost:3000/personalInformation/1",
          {
            title: Title,
            overview :newOverView,
            hourlyRate:hourlyRate,
          }
        );
        if (res) {
          setRefresh(true);
          
        }

      } catch (error) {
        console.log(error);
      }
    })();
  
  };

  return (
    <StyleOverView>
      <h3>Overview</h3>
      <p>
        Use this space to show clients you have the skills and experience
        they're looking for.
      </p>
      <ul>
        {itemOverView.map((curEle, index) => (
          <li key={index}>{curEle}</li>
        ))}
      </ul>
      <p>Learn more</p>
      <form onSubmit={(e) =>handleSubmit(e)}>
          
        <textarea rows="10" cols="100" onChange={(e) => handleChange(e)} value={newOverView}></textarea>
        <StyledButton
        backGround="#ffffff"
        width="12rem"
        color="green"
        type="button"
        onClick={() => data.closeIsPopOpen(type)}
      >
        Cancel
      </StyledButton>
      <StyledButton  backGround="green"
        width="12rem"
        color="#ffffff"
        onClick={() => data.closeIsPopOpen(type)}
        borderColor="green" type="submit" >submit</StyledButton>
      </form>
      {refresh ? <Navigate to={"/redirect"} /> : ""}
  

    </StyleOverView>
  );
};

export default Overview;
