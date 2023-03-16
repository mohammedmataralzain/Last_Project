import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Input, StyleSearch } from "../Search/styled";
import { DropdownStyle, StyledBurger } from "./styled";

const Dropdown = ({ title, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
    setOpen(!open);
  };
  return (
    <DropdownStyle>
      <div className="titleDropDown" onClick={toggle}>
        <h3>{title}</h3>
        <StyledBurger open={open} className="toggle">
          <SlArrowDown className="icon"/>
        </StyledBurger>
      </div>
      <div>
        {dropdownOpen &&
          (Array.isArray(items) ? (
            items.map((item) => (
              <ul>
                <li>
                  <input type="checkbox" />
                  {item}
                </li>
              </ul>
            ))
          ) : (
            <StyleSearch>
              <Input type="text" placeholder={items.placeHolder}/>
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
            </StyleSearch>
          ))}
      </div>
    </DropdownStyle>
  );
};

export default Dropdown;
