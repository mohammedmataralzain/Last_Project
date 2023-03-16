import styled from "styled-components";

export const StyleHeaderProfile = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 3rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  .left-header-profile {
    display: flex;
    .content {
      padding-left: 5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      p {
        color: #5e6d55;
      }
      @media (max-width: 768px) {
        padding-left: 1rem;

  }
    }

  }
  .right-header-profile {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (max-width: 1245px) {
      display: none;
    }
  }
  .available-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.7rem;
    p {
      width: 11rem;
      gap: 0.5rem;
      height: 2.5rem;
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #9aaa97;
      border: 0.2rem solid #9aaa97;
      border-radius: 4rem;
    }
  }
`;
export const StyleAfatar = styled.header`
  position: relative;
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
  .edit {
    position: absolute;
    top: 0;
    left: -1.3rem;
  }
  &::after {
    content: "";
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    background-color: green;
    border-radius: 50%;
    left: 5rem;
    top: 7rem;
    outline: 0.5rem solid #ffffff;
  }
`;
