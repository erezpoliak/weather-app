import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnnualChart from "./AnnualChart";
import YearChart from "./YearChart";
import { Link } from "react-router-dom";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import AutoCompleteSearch from "./AutoCompleteSearch";
import { Info } from "@styled-icons/octicons/Info";
import Div100vh from "react-div-100vh";

const Stats = () => {
  return (
    // <Div100vh>
    <Container>
      <TopBar>
        <StyledLink to="/">
          <BackBtn></BackBtn>
        </StyledLink>
        <Wrapper>
          <AutoCompleteSearch></AutoCompleteSearch>
        </Wrapper>
        <StyledLink to="/info">
          <InfoBtn></InfoBtn>
        </StyledLink>
      </TopBar>
      <AnnualChart></AnnualChart>
      <YearChart></YearChart>
    </Container>
    // </Div100vh>
  );
};

export default Stats;

const Container = styled.div`
  display: grid;
  grid-template-rows: 12% 42% 42%;

  height: 100vh;
  width: 100vw;
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: 10% 66% 10%;
  justify-content: space-around;
  align-items: center;

  height: 100%;
`;

const BackBtn = styled(ArrowBack)`
  width: 65%;
  height: 65%;
  color: rgba(201, 195, 177, 1);
  @media (min-width: 768px) {
    width: 35%;
    height: 50%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBtn = styled(Info)`
  width: 65%;
  height: 65%;
  color: rgba(201, 195, 177, 1);
  @media (min-width: 768px) {
    width: 35%;
    height: 50%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
