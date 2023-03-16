import styled from "styled-components";

export const MenuButton = styled.div`
  font-size: 1.5rem;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d5e0d5;
`;


export const SubRoutesContainer = styled.ul`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  li {
    padding-left: 2.9rem;
    font-size: 1.2rem;
    border: 1px solid transparent;
  }  
  
`;

