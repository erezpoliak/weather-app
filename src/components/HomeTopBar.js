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
      <StyledLink to="/info">
        <InfoIcon></InfoIcon>
      </StyledLink>
      <AutoCompleteSearch></AutoCompleteSearch>
      <ToggleContainer>
        <TempToggle></TempToggle>
      </ToggleContainer>
      <StyledLink to="/stats">
        <StatsIcon></StatsIcon>
      </StyledLink>
    </Container>
  );
};

export default HomeTopBar;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  grid-template-columns: 10% 30% 10% 10%;
  // grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: center;
  // display: flex;
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
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
