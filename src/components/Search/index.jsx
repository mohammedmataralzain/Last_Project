import React, { useState } from "react";
import axios from "axios"
import { useJobsContext } from "../../contexts/JobsContext";
import {  useNavigate } from "react-router-dom";
import { PATHS } from "../../router";
import { Input, StyleSearch } from "./styled";

const Search = () => {
  const [title, setTitle] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate()

  const data = useJobsContext()

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handelSubmit = (e) => {
     e.preventDefault();
     let url = 'http://localhost:3000/jobs';
      
     if (title) {
       url += `?title=${title}`;
     }
 
     axios.get(url)
     .then((response) => {
      navigate(PATHS.SEARCH)
      data.SetData(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
     setTitle('')
     
  }
console.log(filteredData)
  return (
    <StyleSearch>
      <form onSubmit={(e) =>handelSubmit(e)}>
        <Input type="text" placeholder="Search" onChange={handleTitleChange} value={title}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          role="img"
          width="20px"
          className="icon"
        >
          <path
            vectorEffect="non-scaling-stroke"
            stroke="var(--icon-color, #001e00)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M10.688 18.377a7.688 7.688 0 100-15.377 7.688 7.688 0 000 15.377zm5.428-2.261L21 21"
          ></path>
        </svg>
      </form>
    </StyleSearch>
  );
};

export default Search;
