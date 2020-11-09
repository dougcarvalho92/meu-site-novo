import styled from "styled-components";

export const Details = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`;
export const Detail = styled.div`
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  background: #ffffff;
  width: 100%;
  overflow: hidden;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  + div {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    + div {
      margin-top: 0px;
    }
  }
`;

export const DateTime = styled.div`
  background-color: #16cdd6;
  padding: 5px 24px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DetailContent = styled.div`
  padding: 24px;

  h1 {
    color: #4d6f80;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 8px;
    font-weight: 900;
  }
  h2 {
    font-size: 14px;
    line-height: 16px;
    color: #4d6f80;
  }
  p {
    line-height: 20px;
    color: #5c8599c9;
    margin-top: 10px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    p {
      line-height: 24px;
    }
  }
`;
export const DetailFooter = styled.a`
  background-color: #16cdd6;
  width: 100%;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  padding: 5px 24px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  color:#fff;
  &:hover {
    background-color:#12AFCB;
  }
`;
