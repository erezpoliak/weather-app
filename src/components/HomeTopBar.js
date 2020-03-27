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
      <SearchWrapper>
        <AutoCompleteSearch></AutoCompleteSearch>
      </SearchWrapper>
      <ToggleContainer>
        {/* <Fdiv>Faranheit</Fdiv> */}
        <TempToggle></TempToggle>
      </ToggleContainer>
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
  width: 100vw;
  height: 100%;
  grid-template-columns: 10% 55% 10% 10%;
  // grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: center;
  // display: flex;
  @media (min-width: 768px) {
    grid-template-columns: 10% 66% 10%;
  }
`;

const StatsIcon = styled(ChartBar)`
  width: 50%;
  height: 50%;
  color: rgba(201, 195, 177, 1);
  // @media (min-width: 768px) {
  //   display: none;
  // }
`;

const InfoIcon = styled(Info)`
  width: 50%;
  height: 50%;
  color: rgba(201, 195, 177, 1);
  @media (min-width: 768px) {
    width: 35%;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100% !important;
  align-items: center;
`;

const Fdiv = styled.div`
  font-size: 1rem;
  margin-right: 8%;
`;
