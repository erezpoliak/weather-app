import React from "react";
import styled from "styled-components";
import { Info } from "@styled-icons/octicons/Info";
import { ChartBar } from "@styled-icons/fa-regular/ChartBar";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TempToggle from "./TempToggle";
import { Link } from "react-router-dom";

const HomeTopBar = () => {
  return (
    <Container>
      <StyledLink_info to="/info">
        <InfoIcon></InfoIcon>
      </StyledLink_info>
      <FlexWrapper>
        <AutoCompleteSearch></AutoCompleteSearch>
      </FlexWrapper>
      <FlexWrapper>
        <TempToggle></TempToggle>
      </FlexWrapper>
      <StyledLink_stats to="/stats">
        <StatsIcon></StatsIcon>
      </StyledLink_stats>
    </Container>
  );
};

export default HomeTopBar;

const StyledLink_info = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const StyledLink_stats = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 55% 10% 10%;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 10% 66% 10%;
  }
`;

const StatsIcon = styled(ChartBar)`
  width: 50%;
  height: 50%;
  color: rgba(201, 195, 177, 1);
`;

const InfoIcon = styled(Info)`
  width: 50%;
  height: 50%;
  color: rgba(201, 195, 177, 1);
  @media (min-width: 768px) {
    width: 35%;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
