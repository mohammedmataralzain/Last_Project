import React from "react";
import Img from "../../assets/avatar.png";
import Edit from "../Edit";
import { StyledButton } from "../style";
import { StyleAfatar, StyleHeaderProfile } from "./styled";
const HeaderProfile = () => {
  return (
    <StyleHeaderProfile>
      <div className="left-header-profile">
        <StyleAfatar>
          <img src={Img} alt="Img not found" />
          <div className="edit">
            <Edit />
          </div>
        </StyleAfatar>
        <div className="content">
          <h2>Mohammed Matar</h2>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 14 14"
              role="img"
              width="1.5rem"
              fill="#5e6d55"
            >
              <path
                fill-rule="evenodd"
                d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"
              ></path>
            </svg>
            Gaza, Palestinian Territories – {new Date().toLocaleTimeString()}{" "}
            local time
          </p>
          <div className="available-box">
            <p className="available">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0.5 0.5 14 14"
                role="img"
                width="1.5rem"
                fill="#9aaa97"
              >
                <path d="M12.063 4.679c.217-.002.416.03.527.235.105.195.025.375-.082.546-1.85 2.928-3.697 5.856-5.546 8.784-.112.18-.262.314-.479.232-.226-.086-.36-.262-.327-.525.106-.83.608-4.646.764-5.725.032-.226-.029-.279-.253-.277-1.227.01-2.454.002-3.678.008-.238 0-.455-.025-.58-.254-.127-.233.019-.409.143-.584L7.032.85c.073-.103.138-.213.252-.279.327-.196.689.033.689.449.006 1.1.012 2.2-.004 3.3-.004.28.068.372.357.369l3.737-.01"></path>
              </svg>
              Available now
            </p>
            <span>off</span>
            <Edit />
          </div>
        </div>
      </div>

      <div className="right-header-profile">
        <StyledButton
          backGround="#ffffff"
          width="18rem"
          color="green"
          borderColor="green"
        >
          See Public View
        </StyledButton>
        <StyledButton
          backGround="green"
          width="18rem"
          color="#ffffff"
          borderColor="green"
        >
          Profile Setting
        </StyledButton>
      </div>
    </StyleHeaderProfile>
  );
};

export default HeaderProfile;
