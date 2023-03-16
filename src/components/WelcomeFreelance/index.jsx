import React , {useState,useEffect}from "react";
import styled from "styled-components";
import { StyleWelcomeFreelance } from "./styled";



const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const WelcomeFreelance = () => {
  const [name,setName] = useState('')

  useEffect(() => {
    const userName = localStorage.getItem("name");
    setName(userName)
    
  }, []);
  const myDate = new Date();
  const day = days[myDate.getDay()];
  const date = myDate.getDate();
  const month = months[myDate.getMonth()];
  const time = myDate.toLocaleTimeString();

 
  return (
    <StyleWelcomeFreelance>
      <div>
        {day},{month}
        {date}
        {date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "ed" : "th"}
      </div>
      <div>
        Good {time.endsWith("AM") ? "Morning" : "Afternoon"}
        ,{name}
      </div>
    </StyleWelcomeFreelance>
  );
};

export default WelcomeFreelance;