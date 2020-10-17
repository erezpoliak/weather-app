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
    <Grid>
      <TopBar to="/">
        <ForwardIcon></ForwardIcon>
      </TopBar>
      <InfoWrapper>
        <Name>Erez Poliak</Name>
        <Desc>Full Stack Web Developer</Desc>
        <IconWrapper>
          <LinkIcon href="https://www.linkedin.com/in/erez-poliak-9552091b3/">
            <LinkedInIcon></LinkedInIcon>
          </LinkIcon>
          {/* <LinkIcon href="https://google.com">
            <FacebookIcon></FacebookIcon>
          </LinkIcon> */}
          <LinkIcon href="https://github.com/erezpoliak/">
            <GithubIcon></GithubIcon>
          </LinkIcon>
          <LinkIcon href="mailto: poliakerez@gmail.com">
            <MailIcon></MailIcon>
          </LinkIcon>
        </IconWrapper>
        <LinkCode href="https://github.com/erezpoliak/weather-app">
          Check out my code
        </LinkCode>
      </InfoWrapper>
    </Grid>
  );
};

export default PersonalInfo;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 12% 88%;
  height: 100vh;
`;

const InfoWrapper = styled.div`
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
  justify-content: center;
  align-items: center;
`;

const LinkedInIcon = styled(Linkedin)`
  width: 100%;
  height: 100%;
`;

const FacebookIcon = styled(Facebook)`
  width: 100%;
  height: 100%;
`;

const GithubIcon = styled(GithubSquare)`
  width: 100%;
  height: 100%;
`;

const MailIcon = styled(Mail)`
  width: 100%;
  height: 100%;
`;

const LinkCode = styled.a`
  font-size: 1rem;
  color: rgba(210, 225, 243, 1);
`;

const TopBar = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ForwardIcon = styled(ArrowForward)`
  margin-right: 5%;
  width: 10%;
  height: 40%;
  color: rgba(210, 225, 243, 1);
`;

const LinkIcon = styled.a`
  width: 10%;
  height: 40%;
  color: rgba(210, 225, 243, 1);
`;
