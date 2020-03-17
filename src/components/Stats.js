import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnnualChart from "./AnnualChart";
import YearChart from "./YearChart";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <Container>
      <TopBar></TopBar>
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
