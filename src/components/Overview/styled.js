import styled from "styled-components";

export const StyleOverView = styled.div`
  p {
    margin: 3rem 0 1rem 0;
  }
  ul {
    padding: 2rem;
    li {
      list-style: disc;
      margin: 1.7rem 0;
    }
  }

  p:nth-of-type(2) {
    color: #14a800;
  }
  textarea {
    rows: "10";
    cols: "100";
    border: 0.3rem solid #beccbe;
    border-radius: 1rem;
  }
`;