import React, { useContext } from "react";
import styled from "styled-components";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TempToggle from "./TempToggle";
import { Forecast_Context } from "./Context";

const Header = () => {
  const { currentData } = useContext(Forecast_Context);
  const description =
    currentData && currentData.weather && currentData.weather.description;
  return (
    <Container>
      <TopBar>
        <AutoCompleteSearch></AutoCompleteSearch>
        <TempToggle></TempToggle>
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
  flex-basis: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
