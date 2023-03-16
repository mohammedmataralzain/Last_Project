import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/ModelContext";
import { PATHS } from "../../router";
import { StyledButton, StyledInput } from "../style";
import { StyleEditTitle } from "./styled";

const EditTitle = ({ type }) => {
  const data = useGlobalContext()

  const [newTitle, setNewTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [hourlyRate, setRate] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/personalInformation"
        );
        if (response) {
          setNewTitle(response.data[0].title);
          setOverView(response.data[0].overview);
          setRate(response.data[0].hourlyRate);
        }
      } catch (err) {
      }
    })();
  }, []);

  


  const handleChange = (e) => {
    const { value } = e.target;
    setNewTitle(value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await axios.put(
          "http://localhost:3000/personalInformation/1",
          {
            title: newTitle,
            overview :overView,
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
    
    <StyleEditTitle>
      <h3>Edit your title</h3>
      <p>Your title</p>
      <p>
        Enter a single sentence description of your professional
        skills/experience (e.g. Expert Web Designer with Ajax experience)
      </p>
      <form onSubmit={(e) =>handleSubmit(e)}>
        <StyledInput
          type="text"
          value={newTitle}
          onChange={(e) => handleChange(e)}
        />
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

    </StyleEditTitle>
  );
};

export default EditTitle;
