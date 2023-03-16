import styled from "styled-components";

export const StyledInput = styled.input`
    width: ${({width}) => width ? width : '100%'};

  height: 5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #E0E0E0;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  border: 0.3rem solid #A9ACB0;
`;


export const Or = styled.div`
position: relative;
text-align: center;
margin-top: 20px;
color: #A9ACB0;
&::before {
    content: "";
    position: absolute;
    width: 11%;
    height: 1px;
    background-color: #A9ACB0;
    left: 0;
    top: 8px;

}
&::after {
    content: "";
    position: absolute;
    width: 11%;
    height: 1px;
    background-color: #A9ACB0;
    right: 0;
    top: 8px;
}

`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
  input[type="phone"] {
    border-radius: 0 6px 6px 0;
  }
`;

export const StyledButton = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  width: ${({width}) => width ? width : ''};
  background-color:  ${({backGround}) => backGround ? backGround : ''};
  color: ${({color}) => color ? color : '#FFFFFF'};
  padding: 1rem;
  margin: 1rem auto;
  border: 2px solid #E0E0E0;
  border-color: ${({borderColor}) => borderColor ? borderColor : ""};
  border-radius: 80px;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: 1px solid #E0E0E0;
  border-radius: 6px 0 0 6px;
`;

export const StyleLayoutProfile = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1rem;
    @media (max-width : 1245px) {
        flex-direction: column-reverse;
    }
`
export const Container = styled.section`
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    /* border: 2px solid #d5e0d5; */
    border-radius: 1.5rem;
    @media (max-width: 768px) {
      width: 90%;

  }
    @media (max-width: 449px) {
      width: 100%;

  }

    `