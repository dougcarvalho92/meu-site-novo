import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  main {
    margin-top: 80px;
    flex: 1;
    padding: 24px;
  }

  @media (min-width: 768px) {
    main {
      margin-top: 0px;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 1440px) {
  }
`;
