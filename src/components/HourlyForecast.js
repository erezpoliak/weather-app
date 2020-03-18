import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Forecast_Context } from "./Context";
import * as Utility from "./Utility";

const HourlyForecast = () => {
  const { data12hour, currentData, method } = useContext(Forecast_Context);
  const [currentTemp, set_currentTemp] = useState({ method: "F", temp: null });
  const [temp12, set_temp12] = useState({ method: "F", tempArr: [] });
  useEffect(() => {
    const new_tempArr = data12hour.map(i => {
      return i.Temperature.Value;
    });
    const new_temp12 = { method: "F", tempArr: new_tempArr };
    const new_current = { method: "F", temp: currentData.temp };
    set_temp12(new_temp12);
    set_currentTemp(new_current);
  }, [currentData.temp, data12hour]);
  if (method !== currentTemp.method) {
    const converted_temp = Utility.convertTemp(
      currentTemp.temp,
      currentTemp.method
    );
    const new_temp = { method: method, temp: converted_temp };
    set_currentTemp(new_temp);
  }
  if (method !== temp12.method) {
    const new_arr = temp12.tempArr.map(i => {
      return Utility.convertTemp(i, temp12.method);
    });
    const new12temp = { method: method, tempArr: new_arr };
    set_temp12(new12temp);
  }
  const bitIcon =
    currentData && currentData.weather && currentData.weather.icon;
  const bitDescription =
    currentData && currentData.weather && currentData.weather.description;
  const iconUrlAcuu = "https://www.accuweather.com/images/weathericons/";
  const iconUrlBit = "https://www.weatherbit.io/static/img/icons/";
  const getHour = date => {
    const result = date.slice(11, 13);
    return result;
  };
  return (
    <GridContainer>
      <HourDiv key={Math.random()}>
        <div>Now</div>
        <WeatherIconBit
          src={`${iconUrlBit}${bitIcon}.png`}
          alt={bitDescription}
        ></WeatherIconBit>
        <div>{Math.round(currentTemp.temp)}</div>
      </HourDiv>
      {data12hour.map((i, index) => {
        return (
          <HourDiv key={Math.random()}>
            <div>{getHour(i.DateTime)}</div>
            <WeatherIconAcuu
              src={`${iconUrlAcuu}${i.WeatherIcon}.svg`}
              alt={i.IconPhrase}
            ></WeatherIconAcuu>
            <div>{temp12.tempArr[index]}</div>
          </HourDiv>
        );
      })}
    </GridContainer>
  );
};

export default HourlyForecast;

const GridContainer = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(13, 20%);
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const HourDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15%;
`;

const WeatherIconAcuu = styled.img`
  height: 100%;
  width: 100%;
`;

const WeatherIconBit = styled.img`
  width: 12%;
  height: 12%;
`;
