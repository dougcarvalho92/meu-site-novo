import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingContainer = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background: url("../../images/landing.svg") no-repeat 80% center;
  padding: 30px;
  
`;

export const Main = styled.div`
  max-width: 450px;
  h1 {
    font-size: 4.75rem;
    font-weight: 900;
    line-height: 4.375rem;
  }
  p {
    margin-top: 40px;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  font-size: 1.5rem;
  line-height: 2.125rem;
  display: flex;
  flex-direction: column;
  text-align: right;
  & strong {
    font-weight: 800;
  }
`;
export const ContentRoutes = styled.div`
  position: absolute;
  right: 0;
  bottom: 30px;

  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EnterApp = styled(Link)`
  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  margin:5px;

  &:hover {
    background: #96feff;
  }
`;
