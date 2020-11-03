import React from "react";
import {
  Main,
  LandingContainer,
  ContentWrapper,
  Footer,
  Header,
  PerfilImage,
  ListSkills,
  SocialLink,
  ListSocialMedia
} from "./styles";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaSass,
  FaUser,
  FaLinkedin

} from "react-icons/fa";

import { IoLogoIonic, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';

import { Link } from "react-router-dom";

import logoImg from "../../images/logo.svg";



const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <ContentWrapper>
        <Header>
          <PerfilImage src={logoImg} alt="Douglas Carvalho" />
          <h2>Douglas Carvalho</h2>
          <p>
            Rio de Janeiro / Niterói

          </p>
          <p>
            <ListSocialMedia>
              <SocialLink href="https://br.linkedin.com/in/dscarvalho92?trk=profile-badge" target="_blank" ><FaLinkedin size={18} color="rgba(0,0,0,0.6)" /></SocialLink>
            </ListSocialMedia></p>
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

          <Link to="/experience">
            <FaBriefcase size={26} color="rgba(0,0,0,0.6)" />
          </Link>
          <Link to="/education">
            <FaGraduationCap size={26} color="rgba(0,0,0,0.6)" />
          </Link>
          <Link to="/courses">
            <FaLaptopCode size={26} color="rgba(0,0,0,0.6)" />
          </Link>
        </Footer>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;
