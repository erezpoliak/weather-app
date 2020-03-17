import React, { useContext } from "react";
import styled from "styled-components";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TempToggle from "./TempToggle";
import { Forecast_Context } from "./Context";
import { Link } from "react-router-dom";
import { ChartBar } from "@styled-icons/fa-regular/ChartBar";
import { Info } from "@styled-icons/octicons/Info";

const Header = () => {
  const { currentData } = useContext(Forecast_Context);
  const description =
    currentData && currentData.weather && currentData.weather.description;
  return (
    <Container>
      <TopBar>
        <StyledLink to="/info">
          <InfoIcon></InfoIcon>
        </StyledLink>
        <AutoCompleteSearch></AutoCompleteSearch>
        <div>
          <TempToggle></TempToggle>
        </div>
        <StyledLink to="/stats">
          <StatsIcon></StatsIcon>
        </StyledLink>
      </TopBar>
      <div>
        <City>{currentData.city_name}</City>
        <Summary>{description}</Summary>
        <Temprature>{currentData.temp}</Temprature>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-rows: 35% auto;
  border: 1px solid black;
`;

const City = styled.div`
  text-align: center;
  margin-top: 8%;
`;

const Summary = styled.div`
  text-align: center;
  margin-top: 8%;
`;

const Temprature = styled.div`
  text-align: center;
  margin-top: 8%;
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15%);
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)``;

const StatsIcon = styled(ChartBar)`
  width: 30%;
  height: 30%;
  color: rgba(201, 195, 177, 1);
`;

const InfoIcon = styled(Info)`
  width: 30%;
  height: 30%;
  color: rgba(201, 195, 177, 1);
`;
