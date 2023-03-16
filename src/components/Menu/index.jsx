import { MenuButton, StyleMenu, SubRoutesContainer } from "./styled";

const Menu = ({ route }) => {
  return (
    <StyleMenu>
      <MenuButton>
        {route.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          role="img"
          width="10px"
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
      </MenuButton>
      <SubRoutesContainer>
        {route.subRoutes?.map((subRoute,index) => (
          <li key={index}>{subRoute.name}</li>
        ))}
      </SubRoutesContainer>
    </StyleMenu>
  );
};

export default Menu;

