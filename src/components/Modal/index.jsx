import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../contexts/ModelContext";

const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 80rem;
  min-height: 38rem;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 1.5rem;
  .btn {
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const StyledModal = ({ type, show, children }) => {
  const data = useGlobalContext()

  return (
    <ModalDiv block={show ? "block" : "none"}>
      <ContentDiv>
        {children}
        <button onClick={() => data.closeIsPopOpen(type)} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            width="20px"
          >
            <polygon
              fillRule="evenodd"
              points="12.524 0 7 5.524 1.476 0 0 1.476 5.524 7 0 12.524 1.476 14 7 8.476 12.524 14 14 12.524 8.476 7 14 1.476"
            ></polygon>
          </svg>
        </button>
      </ContentDiv>
    </ModalDiv>
  );
};
