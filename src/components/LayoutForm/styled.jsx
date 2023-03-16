import styled from "styled-components";

export const StyleLayoutForm = styled.div`
   max-width: ${({width}) => width ? width : ''};
    margin: 60px auto;
    min-height: 40rem;
    border: 0.3rem solid #E0E0E0;
    padding: 2rem;
    text-align: center;
    border-radius: 1.5rem;
    h2 {
        margin:  3rem 0 5rem 0;
    }
    p {
        margin: 2rem 0;
        span {
            color: green;
        }
    }
`