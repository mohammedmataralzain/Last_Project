import { useAuthContext } from "../../contexts/AuthContext";
import { routes } from "../../mock/RoutesNan";
import ExpandMenu from "../ExpandMenu";
import { UlMobile } from "./styled";

const NavMobile = ({ open }) => {
  const { logout } = useAuthContext();

  return (
    <UlMobile open={open}>
      {routes.map((route,index) => {
        if (route.subRoutes) {
          return <ExpandMenu route={route} key={index} />;
        }
        return (
          <ul key={index}>
            <li >{route.name}</li>
            <li >Help</li>
            <li >Direct Contracts</li>
            <li >Notifications</li>
            <li > Settings</li>
            <li  onClick={logout}>Log out</li>
          </ul>
        );
      })}
    </UlMobile>
  );
};

export default NavMobile;

