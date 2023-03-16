import styled from "styled-components";

export const StyleNavContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const StyleLeftNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyleNavRoutes = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyleNavRoute = styled.div`
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #14a800;
  }
`;
export const StyleNavMobile = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyleRightNav = styled.div`
padding-left: 50rem;
flex: 1;
display: flex;
justify-content: space-between;
img {

  width: 30px;
  height: 30px;
  border-radius: 50%;
}
div:nth-child(2) {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 2rem;
}
@media (max-width: 768px) {
    display: none;
  }
`;

