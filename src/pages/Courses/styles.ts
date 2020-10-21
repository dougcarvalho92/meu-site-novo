import styled from "styled-components";



export const Details = styled.div`


  @media (min-width: 767px) {
    padding: 80px;
  }
`;
export const Detail = styled.div`
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  background: #ffffff;
  width: 100%;
  overflow: hidden;
  + div {
    margin-top: 20px;
  }

  @media (min-width: 767px) {
    padding: 30px;
    overflow: hidden;
    position: relative;
    margin: 30px auto;
  }
`;

export const DateTime = styled.div`
  background-color: #16cdd6;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 24px;
  @media (min-width: 767px) {
    background-color: #16cdd6;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const DetailContent = styled.div`
  padding: 24px;

  h1 {
    color: #4d6f80;
    font-size: 17px;
    line-height: 24px;
    margin-bottom: 8px;
    font-weight: 900;
  }
  h2 {
    font-size: 14px;
    line-height: 16px;
    color: #4d6f80;
  }
  p {
    line-height: 28px;
    color: #5c8599c9;
    margin-top: 10px;
    font-size:14px;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #d3e2e6;
    margin: 64px 0;
  }
  

  @media (min-width: 767px) {
    margin-left: 100px;
  }
`;

