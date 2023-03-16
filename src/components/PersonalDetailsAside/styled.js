import styled from "styled-components";

export const StylePersonalDetailsAside = styled.aside`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.5rem;
  text-align: center;
  border: 0.2rem solid #d5e0d5;
  border-radius: 1.4rem;
  height: 20rem;
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
  h3 {
    color: black;
    text-decoration: underline solid;
  }
  @media (max-width : 776px) {
    display: none;
  }
`;
