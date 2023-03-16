import { useState } from "react";
import { MenuButton, SubRoutesContainer } from "./styled";

// Menu for mobile
const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <MenuButton onClick={toggleMenu}>
        {route.name}{" "}
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="20px"

          >
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M18 10l-6 5-6-5"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="20px"
          >
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M18 10l-6 5-6-5"
            ></path>
          </svg>
        )}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute) => (
          <li to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </li>
        ))}
      </SubRoutesContainer>
    </>
  );
};

export default ExpandMenu;
