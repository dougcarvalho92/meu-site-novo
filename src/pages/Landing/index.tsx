import React from "react";

import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaSass,

} from "react-icons/fa";
import { IoLogoIonic, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';

import logoImg from "../../images/logo.svg";

import {
  Main,
  LandingContainer,
  EnterApp,
  ContentWrapper,
  Footer,
  Header,
  PerfilImage,
  ListSkills,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <ContentWrapper>
        <Header>
          <PerfilImage src={logoImg} alt="Douglas Carvalho" />
          <h2>Douglas Carvalho</h2>
          <span>
            Rio de Janeiro / Niterói
          </span>
        </Header>

        <Main>
          <h1>Desenvolvedor Front-end</h1>
          <p>
            Bacharel em sistemas de informação e entusiasta do desenvolvimento
            mobile.
          </p>
          <ListSkills>
            <FaReact size={26} color="#fff" />
            <FaNodeJs size={26} color="#fff" />
            <IoLogoIonic size={26} color="#fff" />
            <IoLogoJavascript size={26} color="#fff" />
            <IoLogoHtml5 size={26} color="#fff" />
            <IoLogoCss3 size={26} color="#fff" />
            <FaPhp size={26} color="#fff" />
            <FaWordpress size={26} color="#fff" />
            <FaSass size={26} color="#fff" />
          </ListSkills>

        </Main>

        <Footer>
          <EnterApp to="/experience">
            <FaBriefcase size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
          <EnterApp to="/education">
            <FaGraduationCap size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
          <EnterApp to="/courses">
            <FaLaptopCode size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
        </Footer>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;
