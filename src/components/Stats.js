import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnnualChart from "./AnnualChart";
import YearChart from "./YearChart";

const Stats = () => {
  const [stationId, setStationId] = useState(40180);

  return (
    <Container>
      <div></div>
      <AnnualChart></AnnualChart>
      <YearChart></YearChart>
    </Container>
  );
};

export default Stats;

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 30% 30% auto;
`;
