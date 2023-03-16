import styled from "styled-components";

export const UlMobile = styled.ul`
  display: none;

  li {
    padding: 18px 10px;
    color: black;
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #d5e0d5;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    top: 10%;
    left: 0;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.9s ease-in-out;
    z-index: 10;
  }
`;
