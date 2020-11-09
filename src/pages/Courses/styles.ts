import styled from "styled-components";

export const CoursesList = styled.div`
  flex: 1;
  overflow-y: scroll;
`;
export const SearchBar = styled.input``;
export const CourseItem = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px 24px;

  h4 {
    color: #4d6f80;
    font-size: 10px;
  }
  p {
    color: #5c8599c9;
    font-size: 8px;
  }
`;
export const PageCounter = styled.span`
  margin-top: 20px;
  color: #333;
  float: right;
  width: 100%;
`;
export const LoadMore = styled.button`
  background-color: #fff;
  margin-top: 10px;
  padding: 15px 32px;
  border-radius: 20px;
  color: #4d6f80;
  border: none;
  align-self: center;
  transition: background-color 0.3s;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #d3e2e5;
  width: 100%;
  &:hover {
    background-color: #16cdd6;
    color: #fff;
  }

  @media (min-width: 768px) {
    width: 30%;
    margin: 20px auto;
  }

  @media (min-width: 1440px) {
    svg {
      height: 60px;
      width: 60px;
    }
  }
`;
