import React from "react";
import Edit from "../Edit";
import { StyleEdit } from "../Edit/styled";
import { StyleDetailPersonalItem } from "./styled";


const DetailPersonalItem = ({
  children,
  title,
  icon1 = true,
  icon2 = true,
}) => {
  return (
    <StyleDetailPersonalItem>
      <div>
        <p>{title}</p>
        {icon1 === false || (
          <StyleEdit>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 14 14"
              role="img"
              width="1.5rem"
              fill="green"
            >
              <polygon
                fillRule="evenodd"
                points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
              ></polygon>
            </svg>
          </StyleEdit>
        )}
        {icon2 === false || <Edit />}
      </div>
      {children}
    </StyleDetailPersonalItem>
  );
};

export default DetailPersonalItem;
