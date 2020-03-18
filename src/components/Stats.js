import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnnualChart from "./AnnualChart";
import YearChart from "./YearChart";
import { Link } from "react-router-dom";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import AutoCompleteSearch from "./AutoCompleteSearch";
import { Info } from "@styled-icons/octicons/Info";

const Stats = () => {
  return (
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
  );
};

export default Stats;

const Container = styled.div`
  display: grid;
  grid-template-rows: 22% auto% auto%;
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
