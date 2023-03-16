import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aaetar from "../../assets/avatar.png";
import { PATHS } from "../../router";
import { StylePersonalDetailsAside } from "./styled";
const PersonalDetailsAside = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("name");
    setName(userName);
  }, []);
  return (
    <StylePersonalDetailsAside>
      <div>
        <img src={Aaetar} />
      </div>
      <NavLink to="/profile">
        <h3>{name}</h3>
      </NavLink>
      <p>Software Engineer - Java Script</p>
      <div>
        <p>Profile Completeness:</p>
      </div>
    </StylePersonalDetailsAside>
  );
};

export default PersonalDetailsAside;
