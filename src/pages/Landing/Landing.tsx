import React from "react";

import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";
import logoImg from "../../images/logo.svg";

import {
  Main,
  LandingContainer,
  EnterApp,
  Location,
  ContentWrapper,
  ContentRoutes,
  HeaderContent,
  PerfilImage,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <ContentWrapper>
        <HeaderContent>
          <PerfilImage src={logoImg} alt="Douglas Carvalho" />
          <h1>Douglas Carvalho</h1>
          <Location>
            Rio de Janeiro / Niterói
          </Location>
        </HeaderContent>

        <Main>
          <h2>Desenvolvedor Front-end</h2>
          <p>
            Bacharel em sistemas de informação e entusiasta do desenvolvimento
            mobile.
          </p>
        </Main>

        <ContentRoutes>
          <EnterApp to="/experience">
            <FaBriefcase size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
          <EnterApp to="/app">
            <FaGraduationCap size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
          <EnterApp to="/app">
            <FaCode size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
          <EnterApp to="/app">
            <FaLaptopCode size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
        </ContentRoutes>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;
