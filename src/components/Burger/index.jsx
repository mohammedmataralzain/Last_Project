import  { useState } from "react";
import NavMobile from "../NavMobile";
import { StyledBurger } from "./styled";



const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavMobile open={open} />
    </>
  );
};

export default Burger;
