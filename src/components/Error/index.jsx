import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router";
import { StyleError } from "./styled";

/*======================404 page =======================*/

const Error = () => {
  return (
    <StyleError>
      <section>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to={PATHS.HOME} className="more-link">
          Go To Home
        </Link>
      </div>
    </StyleError>
  );
};

export default Error;
