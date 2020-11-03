import styled from "styled-components";
export const LandingContainer = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;
`;
export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;
export const Header = styled.div`
  text-align: center;
  h2 {
    margin-top: 10px;
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 800;
  }
  span {
    font-size: 0.9rem;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    font-weight: 800;
  }

  @media (min-width: 767px) {
    h2 {
      margin-top: 10px;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 800;
    }
    span {
      font-size: 0.9rem;
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      width: 100%;
      font-weight: 800;
    }
  }
`;
export const Main = styled.div`
  max-width: 450px;
  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 2.7rem;
    text-align: center;
  }
  p {
    margin-top: 20px;
    font-size: 0.8rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.75rem;
      font-weight: 900;
      line-height: 3.375rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 4.75rem;
      line-height: 4.375rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;
export const PerfilImage = styled.img`
  width: 80px;
  height: 80px;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1440px) {
    height: 150px;
    width: 150px;
  }
`;
export const Footer = styled.div`
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 60px;
    height: 60px;
    background: #ffd666;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    margin: 5px;

    &:hover {
      background: #96feff;
    }
  }

  @media (min-width: 768px) {
    a {
      width: 60px;
      height: 60px;
    }
  }

  @media (min-width: 1440px) {
    a {
      width: 80px;
      height: 80px;
    }
  }
`;
export const ListSkills = styled.div`
  margin-top: 24px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(9, 1fr);
  gap: 10px;

  @media (min-width: 768px) {
    svg {
      height: 30px;
      width: 30px;
    }
  }

  @media (min-width: 1440px) {
    svg {
      height: 60px;
      width: 60px;
    }
  }
`;
export const SocialLink = styled.a`
  width: 30px;
  height: 30px;
  background: #ffd666;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  margin: 5px;
  &:hover {
    background: #96feff;
  }
`;
export const ListSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`