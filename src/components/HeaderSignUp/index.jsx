import Logo from "../Logo";
import Img from "../../assets/Upowork.png";
import { StyleHeaderSignUp } from "./styled";


const HeaderSignUp = () => {
  return (
    <>
    <StyleHeaderSignUp>
      <Logo src={Img} />
      <p>
        Here to hire talent? <span> Join as a Client</span>
      </p>
    </StyleHeaderSignUp>
    </>
  );
};

export default HeaderSignUp;
