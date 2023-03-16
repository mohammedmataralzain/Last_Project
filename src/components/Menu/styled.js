import styled from "styled-components";

export const SubRoutesContainer = styled.ul`
  position: absolute;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  background-color: #ffffff;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 100;
  li {
    padding: 1rem;
  }
`;

export const StyleMenu = styled.div`
  position: relative;
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  .icon {
    font-size: 1.9rem;
  }
  &:hover {
    color: #14a800;
  }
`;

