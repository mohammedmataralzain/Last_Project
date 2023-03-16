import styled from "styled-components";

 export const StyleSearch = styled.div`
  color: black;
  position: relative;
  display: inline-block;

  .icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  width: 27rem;
  height: 4rem;
  border-radius: 3.5rem;
  font-size: 1.6rem;
  padding-left: 2.9rem;
  border: none;
  &:focus {
    outline: none;
    border: 2px solid #3c8224;
  }
`;