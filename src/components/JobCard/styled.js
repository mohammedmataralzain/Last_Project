import styled from "styled-components";

export const StyleJobCard = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .title {
    display: flex;
    justify-content: space-between;
    button {
      padding: 0.5rem;
      border: 0.1rem solid #939a93dd;
      border-radius: 50%;
      margin-left: 0.9rem;
    }
    h3 {
      color: #0ea40e;
    }
  }
`;