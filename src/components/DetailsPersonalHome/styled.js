import styled from "styled-components";

export const StyleDetailsPersonalHome = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  border: 0.1rem solid #d5e0d5;
  border-radius: 1rem;
  padding-right: 10rem;
  padding: 2rem;
  @media (max-width: 1245px) {
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
