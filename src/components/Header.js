import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TempToggle from "./TempToggle";
import { Forecast_Context } from "./Context";
import { Link } from "react-router-dom";
import { ChartBar } from "@styled-icons/fa-regular/ChartBar";
import { Info } from "@styled-icons/octicons/Info";
import * as Utility from "./Utility";

const Header = () => {
  const { currentData, method } = useContext(Forecast_Context);
  const [currentTemp, set_currentTemp] = useState({ method: "F", temp: null });
  const description =
    currentData && currentData.weather && currentData.weather.description;

  useEffect(() => {
    const new_current = { method: "F", temp: currentData.temp };
    set_currentTemp(new_current);
  }, [currentData.temp, set_currentTemp]);

  if (method !== currentTemp.method) {
    const converted_temp = Utility.convertTemp(
      currentTemp.temp,
      currentTemp.method
    );
    const new_temp = { method: method, temp: converted_temp };
    set_currentTemp(new_temp);
  }

  return (
    <Wrapper>
      <City>{currentData.city_name}</City>
      <Summary>{description}</Summary>
      <Temprature>{`${Math.round(currentTemp.temp)}°`}</Temprature>
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
