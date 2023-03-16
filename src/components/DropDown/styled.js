import styled from "styled-components";

export const DropdownStyle = styled.div`

  border-bottom: 0.1rem solid  #beccbe;
  margin-bottom: 20px;
  padding-top: 10px;
  width: 240px;
  padding: 2rem;
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .titleDropDown {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
input[type==text] {
    margin: 2rem 0;
    width: 25rem;
    height: 3rem;
}
.icon {
    color : green
}
`;
export const StyledBurger = styled.div`
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(360deg)")};
  transition: 0.5s;
`;