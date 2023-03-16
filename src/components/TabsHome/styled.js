import styled from "styled-components";

export const Tabs = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #8b96a5;
max-width: 38rem;
`;
export const Tab = styled.button`
border: none;
padding: 1.5rem;
cursor: pointer;
text-align: center;
height: 4.5rem;
font-size: 1.4rem;
font-weight: 500;
background-color: white;
border-bottom: ${({active}) =>
  active ? "0.2rem solid #001e00" : "#5e6d55"};
color: ${({active}) => (active ? "#001e00" : "#5e6d55")};
transition: 0.1s;
`;
export const Content = styled.div`
border-top: 2px solid #eff2f4;
border: 2px solid #d5e0d5;
padding: 0 4rem;
p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
}
${({active}) => (active ? "" : "display:none")}
`;
export const Style = styled.div`
width: 100rem;
`;