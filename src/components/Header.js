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
  const current_temp = Math.round(currentData.temp);
  return (
    <Wrapper>
      <City>{currentData.city_name}</City>
      <Summary>{description}</Summary>
      <Temprature>{`${current_temp}°`}</Temprature>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const City = styled.div`
  text-align: center;
  font-size: 1.25rem;
`;

const Summary = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const Temprature = styled.div`
  text-align: center;
  font-size: 1.1rem;
`;
