import styled from "styled-components";

export const StyleChangeHourlyRate = styled.div`
 p:first-of-type {
  margin: 5rem 0 2rem 0;
  display: flex;
 }
 p:nth-of-type(2) {
  margin:  2rem 0;
  width: 80%;
 }
 p:nth-of-type(3) {
  margin:  3rem 0;
 }
 .row {
  display: flex;
  justify-content: space-between;
 }

 input {
  all: unset;
  padding: 2rem;
  border-radius: 2rem;
  &:focus {
    border: 2px solid black;
  }
 }
`;