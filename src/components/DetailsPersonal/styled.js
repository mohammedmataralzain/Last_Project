import styled from "styled-components";

export const StyleDetailsPersonal = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 35rem;
        border-right: 2px solid #d5e0d5;
        padding-right: 10rem;
        
        @media (max-width: 1245px) {
          border-right: none;
        padding-right: 2rem;
  }
        div {
            display: flex;
            gap: 1rem;
        } 
    
`