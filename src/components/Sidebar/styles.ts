import styled from "styled-components";

export const AppSidebar = styled.aside`
  padding: 10px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  img {
    width: 48px;
  }
  footer a,
  footer button {
    width: 48px;
    height: 48px;
    border: 0;
    background: #12afcb;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer a:hover,
  footer button:hover {
    background: #17d6eb;
  }

  @media (min-width: 768px) {
    height: 100vh;
    padding: 32px 24px;
    width: 80px;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    float: left;
  }

  @media (min-width: 1440px) {
  }
`;
