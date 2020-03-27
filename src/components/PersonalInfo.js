import React from "react";
import styled from "styled-components";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare";
import { Mail } from "@styled-icons/icomoon/Mail";
import { ArrowForward } from "@styled-icons/material/ArrowForward";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  return (
    <React.Fragment>
      <TopBar to="/">
        <ForwardIcon></ForwardIcon>
      </TopBar>
      <InfoWrapper>
        <Name>Erez Poliak</Name>
        <Desc>Full Stack Web Developer</Desc>
        <IconWrapper>
          <LinkedInIcon></LinkedInIcon>
          <FacebookIcon></FacebookIcon>
          <GithubIcon></GithubIcon>
          <MailIcon></MailIcon>
        </IconWrapper>
        <LinkCode href="https://github.com/erezpoliak/weather-app">
          Check out my code
        </LinkCode>
      </InfoWrapper>
    </React.Fragment>
  );
};

export default PersonalInfo;

const InfoWrapper = styled.div`
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 2.3rem;
`;

const Desc = styled.h5`
  font-size: 1.4rem;
`;

const IconWrapper = styled.div`
  display: flex;
  // margin-left: 5%;
  justify-content: center;
`;

const LinkedInIcon = styled(Linkedin)`
  width: 10%;
  height: 40%;
`;

const FacebookIcon = styled(Facebook)`
  width: 10%;
  height: 40%;
`;

const GithubIcon = styled(GithubSquare)`
  width: 10%;
  height: 40%;
`;

const MailIcon = styled(Mail)`
  width: 10%;
  height: 40%;
`;

const LinkCode = styled.a`
  font-size: 1rem;
  color: rgba(210, 225, 243, 1);
`;

const TopBar = styled(Link)`
  display: flex;
  align-items: center;
  height: 12vh;
  justify-content: flex-end;
  // margin-right: 5%;
`;

const ForwardIcon = styled(ArrowForward)`
  margin-right: 5%;
  width: 10%;
  height: 40%;
  color: rgba(210, 225, 243, 1);
`;
