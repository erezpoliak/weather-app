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
      {/* <TopBar>
        <StyledLink to="/">
          <BackBtn></BackBtn>
        </StyledLink>
        <Wrapper>
          <AutoCompleteSearch></AutoCompleteSearch>
        </Wrapper>
        <StyledLink to="/info">
          <InfoBtn></InfoBtn>
        </StyledLink>
      </TopBar> */}
      <div></div>
      <AnnualChart></AnnualChart>
      <YearChart></YearChart>
    </Container>
    // </Div100vh>
  );
};

export default Stats;

const Container = styled.div`
  display: grid;
  // display: none;
  // height: 100%;
  // grid-template-rows: 22% auto% auto%;
  // grid-template-rows: 40% 40%;
  // justify-content: space-around;
  grid-gap: 8%;
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 10%;
  justify-content: space-around;
  align-items: center;
`;

const BackBtn = styled(ArrowBack)`
  width: 65%;
  height: 65%;
  color: rgba(201, 195, 177, 1);
`;

const Wrapper = styled.div`
  dislay: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBtn = styled(Info)`
  width: 65%;
  height: 65%;
  color: rgba(201, 195, 177, 1);
`;

const StyledLink = styled(Link)`
  dislay: flex;
  justify-content: center;
  align-items: center;
`;
