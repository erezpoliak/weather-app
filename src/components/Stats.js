import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnnualChart from "./AnnualChart";
import YearChart from "./YearChart";
import { Link } from "react-router-dom";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

const Stats = () => {
  return (
    <Container>
      <TopBar>
        <StyledLink to="/">
          <BackBtn></BackBtn>
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
  display: flex;
  justify-content: flex-start;
`;

const BackBtn = styled(ArrowBack)`
  width: 22%;
  height: 22%;
  // color: rgba(201, 195, 177, 1);
  margin-top: 11%;
`;

const StyledLink = styled(Link)``;
