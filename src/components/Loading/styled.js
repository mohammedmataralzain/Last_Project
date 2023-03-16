import styled from "styled-components";

export const StyleLoading = styled.div`

  width: 40px;
  aspect-ratio: 4;
  margin: 0.5rem auto;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: d1 1s steps(4) infinite;

@keyframes d1 {to{clip-path: inset(0 -34% 0 0)}}
`;