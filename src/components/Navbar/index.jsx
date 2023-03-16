import { routes } from "../../mock/RoutesNan";
import Menu from "../Menu";
import Logo from "../Logo";
import Search from "../Search";
import Avatar from "../../assets/avatar.png";
import Burger from "../Burger";


import {
  StyleLeftNav,
  StyleNavContainer,
  StyleNavMobile,
  StyleNavRoute,
  StyleNavRoutes,
  StyleRightNav,
} from "./styled";
import LogOut from "../LogOut";

const Navbar = () => {
  return (
    <StyleNavContainer>
      <StyleNavMobile>
        <Burger />
        <Logo/>
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
      </StyleNavMobile>
      <StyleLeftNav>
      <Logo/>
        <StyleNavRoutes>
          {routes.map((route) => {
            if (route.subRoutes) {
              return <Menu route={route} key={route.name} />;
            }
            return (
              <StyleNavRoute to={route.link} key={route.name}>
                <p>{route.name}</p>
              </StyleNavRoute>
            );
          })}
        </StyleNavRoutes>
      </StyleLeftNav>
      <StyleRightNav>
        <div>
          <Search place="Navbar" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
          >
            <path
              fill="var(--icon-color, #001e00)"
              fillRule="evenodd"
              d="M11.922 21c.545 0 1.013-.468 1.013-.935 0-.546-.468-.935-1.013-.935-.545 0-.935.467-.935.935-.078.467.39.935.935.935z"
              clipRule="evenodd"
            ></path>
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M6 8.688C6 5.571 8.805 3 12.234 3c3.273 0 6.078 2.182 5.61 4.987-.312 2.104-3.195 3.35-4.52 4.987-1.168 1.48-1.168 2.65-1.324 3.662"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
          >
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M15.34 15.999l4.26-2.364c.533-.272.533-1.181 0-1.454L3 3l2.13 17.271c.09.545.71.909 1.155.636l4.616-2.545"
            ></path>
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M10.9 18.362l2.753 2.09c.532.364 1.243.092 1.331-.636l.355-3.908L3 3l7.9 15.362z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
          >
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M19.273 17.564l-1.359-2.209c-.08-.082-.08-.245-.08-.327v-4.99c0-2.946-2.397-5.4-5.274-5.4h-.72c-2.877 0-5.274 2.372-5.274 5.4v5.072c0 .163 0 .245-.08.327l-1.359 2.045c-.32.41 0 1.064.56 1.064h13.027c.559.082.879-.491.559-.982z"
              clipRule="evenodd"
            ></path>
            <path
              vectorEffect="non-scaling-stroke"
              stroke="var(--icon-color, #001e00)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M12.16 4.636V3M9.842 18.628c0 1.308 1.04 2.372 2.318 2.372 1.279 0 2.318-1.064 2.318-2.372"
            ></path>
          </svg>
          <img src={Avatar} />
          <LogOut/>
        </div>
      </StyleRightNav>
    </StyleNavContainer>
  );
};

export default Navbar;
